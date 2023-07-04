import { userData } from "../@types/app";

const UserCard = (user: userData) => {
	return (
		<section className="shadow-lg w-[95%] sm:w-1/2 mx-auto p-4 rounded-xl my-5">
			<section>Name:{user.name}</section>
			<section>Email:{user.email}</section>
			<section>Company:{user.company.name}</section>
		</section>
	);
};

export default UserCard;
