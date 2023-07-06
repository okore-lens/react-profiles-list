import { ReactNode, useCallback, useMemo, useState } from "react";
import AppContext from "./app-context";
// @types
import { userData } from "../../@types/app";
// utils
import axiosInstance from "../../utils/axios";

const AppCtxProvider = ({ children }: { children: ReactNode }) => {
	//  hooks
	const [users, setUsers] = useState<userData[]>([]);

	const updateUsersList = useCallback((users: userData[]) => {
		setUsers(users);
	}, []);

	const fetchUsers = useCallback(async () => {
		const response = await axiosInstance.get("users");
		setUsers(response.data);
	}, []);

	const addUser = useCallback(async (data: userData) => {
		await axiosInstance.post("users", data);
	}, []);

	const deleteUser = useCallback(async (id: string) => {
		await axiosInstance.delete(`users/${id}`);
	}, []);

	const editUser = useCallback(async (data: userData) => {
		await axiosInstance.put(`users/${data.id}`, data);
	}, []);

	const value = useMemo(
		() => ({
			users,
			fetchUsers,
			addUser,
			updateUsersList,
			deleteUser,
			editUser,
		}),
		[users, fetchUsers, addUser, updateUsersList, deleteUser, editUser]
	);
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppCtxProvider;
