import { useContext, useEffect, useState } from "react";
// components
import UsersList from "./components/UsersList";
import SolidButton from "./components/buttons/SolidButton";
import CreateUserForm from "./components/forms/CreateUserForm";
import Spinner from "./components/Spinner";
// interface
import Modal from "./interface/Modal";
// services
import AppContext from "./services/app/app-context";

function App() {
	// hooks
	const appCtx = useContext(AppContext);

	const [openModal, setOpenModal] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			await appCtx?.fetchUsers();
			setIsLoading(false);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className="w-4/5 mx-auto pt-10">
			{openModal && (
				<Modal onClose={() => setOpenModal(false)}>
					<CreateUserForm closeModal={() => setOpenModal(false)} />
				</Modal>
			)}
			<SolidButton
				bgColor="bg-primary"
				styles="px-5"
				name="Add User"
				txtColor="text-white"
				onClick={() => setOpenModal(true)}
			/>
			{isLoading ? <Spinner /> : <UsersList />}
		</section>
	);
}

export default App;
