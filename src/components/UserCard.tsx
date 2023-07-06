/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
// @types
import { userData } from "../@types/app";
// ...............................................................
import OutlinedButton from "./buttons/OutlinedButton";
import SolidButton from "./buttons/SolidButton";
import LoadingButton from "./buttons/LoadingButton";
import Modal from "../interface/Modal";
import EditUserForm from "./forms/EditUserForm";
import RequestStatus from "./RequestStatus";
// services
import AppContext from "../services/app/app-context";

const UserCard = (user: userData) => {
	// hooks
	const appCtx = useContext(AppContext);

	const [openEditModal, setOpenEditModal] = useState<boolean>(false);
	const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

	const [success, setSuccess] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [errMsg, setErrMsg] = useState<string>("");

	// handle delete
	const deleteHandler = async () => {
		setError(false);
		setIsLoading(true);
		const updatedUsers = appCtx?.users.filter((usr) => usr.id !== user.id);
		// console.log(updatedUsers);
		try {
			await appCtx?.deleteUser(user.id!);
			setSuccess(true);
			await appCtx?.updateUsersList(updatedUsers!);
			setTimeout(() => {
				setOpenDeleteModal(false);
				setSuccess(false);
			}, 3000);
		} catch (err: any) {
			setError(true);
			setErrMsg(err);
		} finally {
			setIsLoading(false);
		}
	};

	const detailWrapperStyle = "my-3";
	const detailTitle = "text-secondary text-sm";
	const detail = "text-base";
	return (
		<section className="shadow w-[95%] xl:w-1/2 mx-auto p-4 rounded-xl my-5 ">
			{openDeleteModal && (
				<Modal onClose={() => setOpenDeleteModal(false)}>
					{!success && <p>Are You sure you want to delete {user.name} ?</p>}
					<section className="mt-5">
						{success && (
							<RequestStatus
								type="success"
								message="User Deleted Successfully"
							/>
						)}
						{error && <RequestStatus type="error" message={errMsg} />}
						<section className="mt-5 w-full flex items-center justify-between">
							<OutlinedButton
								borderColor="border-primary"
								name="No"
								styles="px-5 py-2 w-[49%]"
								onClick={() => setOpenDeleteModal(false)}
							/>
							<LoadingButton
								isLoading={isLoading}
								bgColor="bg-red-500"
								name="Yes"
								txtColor="text-white"
								styles="px-5 w-[49%]"
								onClick={deleteHandler}
							/>
						</section>
					</section>
				</Modal>
			)}
			{openEditModal && (
				<Modal
					onClose={() => setOpenEditModal(false)}
					children={
						<EditUserForm
							closeModal={() => setOpenEditModal(false)}
							user={user}
						/>
					}
				/>
			)}
			<section className="w-full">
				<img
					className="w-full h-full"
					alt="User Image"
					src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
				/>
			</section>
			<section>
				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Name</p>
					<p className={`${detail} capitalize`}>{user.name}</p>
				</section>
				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Email</p>
					<p className={`${detail} capitalize`}>{user.email}</p>
				</section>
				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Address</p>
					<p className={`${detail} capitalize`}>{user.address.street}</p>
				</section>

				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Username</p>
					<p className={`${detail} capitalize`}>{user.username}</p>
				</section>
				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Phone</p>
					<p className={`${detail} capitalize`}>{user.phone}</p>
				</section>
				<section className={detailWrapperStyle}>
					<p className={detailTitle}>Company</p>
					<p className={`${detail} capitalize`}>{user.company.name}</p>
				</section>
			</section>
			<section>
				<OutlinedButton
					borderColor="border-primary"
					name="Delete"
					styles="px-5 mr-4 py-2"
					onClick={() => setOpenDeleteModal(true)}
				/>
				<SolidButton
					bgColor="bg-tertiary"
					name="Edit"
					txtColor="text-white"
					styles="px-5"
					onClick={() => setOpenEditModal(true)}
				/>
			</section>
		</section>
	);
};

export default UserCard;
