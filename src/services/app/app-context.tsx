import { createContext } from "react";
import { userData } from "../../@types/app";

export type IAppCtx = {
	users: userData[];
	fetchUsers: () => void;
	addUser: (user: userData) => void;
	editUser: (user: userData) => void;
	updateUsersList: (users: userData[]) => void;
	deleteUser: (id: string) => void;
};

const AppContext = createContext<IAppCtx | null>(null);

export default AppContext;
