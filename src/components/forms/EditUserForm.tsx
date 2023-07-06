import { useContext, useState } from "react";
// dependencies
import { SubmitHandler, useForm } from "react-hook-form";
// @types
import { userData } from "../../@types/app";
import RequestStatus from "../RequestStatus";
// services
import AppContext from "../../services/app/app-context";
// ................................................................................................
import LoadingButton from "../buttons/LoadingButton";

const EditUserForm = ({
	closeModal,
	user,
}: {
	closeModal: () => void;
	user: userData;
}) => {
	// hooks
	const appCtx = useContext(AppContext);
	const [success, setSuccess] = useState(false);

	const {
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		register,
	} = useForm<userData>({
		defaultValues: {
			address: user.address,
			company: user.company,
			email: user.email,
			id: user.id,
			name: user.name,
			phone: user.phone,
			username: user.username,
		},
	});

	const onSubmit: SubmitHandler<userData> = async (data) => {
		const availableUsers = appCtx?.users || [];
		const userIdx = availableUsers.findIndex((usr) => usr.email === user.email);
		availableUsers[userIdx] = data;
		try {
			await appCtx?.editUser(data);
			await appCtx?.updateUsersList([...availableUsers]);
			setSuccess(true);
			setTimeout(() => closeModal(), 3000);
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: { content: string } | any) {
			setError("afterSubmit", {
				message: error?.content || error,
			});
			setTimeout(() => clearErrors(), 4000);
		}
	};

	const inputStyles =
		"w-full p-2  h-5 py-6  rounded-lg border border-subtlebox-border hover:border-primary focus:outline-none focus:!border-primary";

	return (
		<section>
			{success && (
				<RequestStatus type="success" message="User Edited Successfully" />
			)}
			{!!errors.afterSubmit && (
				<RequestStatus type="error" message={errors.afterSubmit.message} />
			)}
			<form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
				{/* name */}
				<input
					{...register("name", { required: true })}
					placeholder="Name"
					className={`${inputStyles}  my-2 ${
						errors.name ? "border-2 border-red-500" : "border border-subtle"
					}`}
				/>
				{errors.name && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				{/* Email */}
				<input
					{...register("email", { required: true })}
					placeholder="Email"
					type="email"
					className={`${inputStyles}  my-2 ${
						errors.email ? "border-2 border-red-500" : "border border-subtle"
					}`}
				/>
				{errors.email && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				{/* Phone */}
				<input
					{...register("phone", { required: true })}
					placeholder="Phone Number"
					type="phone"
					className={`${inputStyles}  my-2 ${
						errors.phone ? "border-2 border-red-500" : "border border-subtle"
					}`}
				/>
				{errors.phone && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				{/* username */}
				<input
					{...register("username", { required: true })}
					placeholder="Username"
					className={`${inputStyles}  my-2 ${
						errors.username ? "border-2 border-red-500" : "border border-subtle"
					}`}
				/>
				{errors.username && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				{/* Company Name */}
				<input
					{...register("company.name", { required: true })}
					placeholder="Company Name"
					className={`${inputStyles}  my-2 ${
						errors.company?.name
							? "border-2 border-red-500"
							: "border border-subtle"
					}`}
				/>
				{errors.company?.name && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				{/* Street Name */}
				<input
					{...register("address.street", { required: true })}
					placeholder="Street Name"
					className={`${inputStyles}  my-2 ${
						errors.company?.name
							? "border-2 border-red-500"
							: "border border-subtle"
					}`}
				/>
				{errors.address?.street && (
					<p className="text-red-500 text-xs">This field is required</p>
				)}
				<LoadingButton
					bgColor="bg-primary"
					name="Edit User"
					styles="w-full mt-5 !rounded-3xl  "
					txtColor="text-white"
					isLoading={isSubmitting || isSubmitSuccessful}
				/>
			</form>
		</section>
	);
};

export default EditUserForm;
