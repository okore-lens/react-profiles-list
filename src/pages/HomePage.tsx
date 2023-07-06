/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from "react";
// services
import AppContext from "../services/app/app-context";
// components
import UserCard from "../components/UserCard";

const HomePage = () => {
	const appCtx = useContext(AppContext);

	const users = appCtx?.users;

	return (
		<section className=" h-[100vh]">
			{users!.length < 1 ? (
				<p>No Users Available</p>
			) : (
				users!.map((user, idx) => (
					<UserCard
						key={idx}
						company={user.company}
						email={user.email}
						name={user.name}
						phone={user.phone}
						address={user.address}
						username={user.username}
						id={user.id}
					/>
				))
			)}
		</section>
	);
};

export default HomePage;
