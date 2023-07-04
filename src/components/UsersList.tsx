import { useEffect, useState } from "react";
// utils
import axiosInstance from "../utils/axios";
// @types
import { userData } from "../@types/app";
import Spinner from "./Spinner";
import UserCard from "./UserCard";

const UsersList = () => {
	const [users, setUsers] = useState<userData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchUsers = async () => {
		setIsLoading(true);
		try {
			const response = await axiosInstance.get("users");
			setUsers(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<section className=" h-[100vh]">
			{isLoading ? (
				<Spinner />
			) : users.length < 1 ? (
				<p>No Users Available</p>
			) : (
				users.map((user) => (
					<UserCard
						key={user.id}
						company={user.company}
						email={user.email}
						name={user.name}
						id={user.id}
						phone={user.phone}
						street={user.street}
						username={user.username}
					/>
				))
			)}
		</section>
	);
};

export default UsersList;
