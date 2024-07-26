export type TUser = {
	username: string;
	name: string;
	password: string;
	phone?: string;
	email?: string;
	firstName?: string;
	lastName?: string;
	address?: string;
};

export type TUserLoginDTO = Pick<TUser, "username" | "password">;
export type TUpdateUserDTO = Pick<TUser, "username"> & Omit<Partial<TUser>, "username">;
export type TDeleteUserDTO = Pick<TUser, "username">;

export type TUsersState = {
	users: TUser[];
	currentUser: TUser["username"] | null;
};
