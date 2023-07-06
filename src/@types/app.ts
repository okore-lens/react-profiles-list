export type userData = {
	name: string;
	username: string;
	email: string;
	phone: string;
	company: { name: string };
	address: { street: string };
	id: string;
	afterSubmit?: boolean;
};
