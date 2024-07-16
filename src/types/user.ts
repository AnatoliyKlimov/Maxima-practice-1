export type TUser = {
	name: string;
	phone: string;
	password: string;
};

export type TUserLoginDTO = Omit<TUser, "name">;

export type TUsersState = {
	users: TUser[];
	currentUser: TUser | null;
};
