export type TUser = {
	name: string;
	phone: string;
	password: string;
	firstName?: string;
	lastName?: string;
	address?: string;
};

export type TUserLoginDTO = Omit<TUser, "name">;
export type TUpdateUserDTO = Partial<TUser>;
export type TDeleteUserDTO = Pick<TUser, "name">;

export type TUsersState = {
	users: TUser[];
	currentUser: TUser["name"] | null;
};
