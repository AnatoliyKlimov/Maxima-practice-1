export type TSignUp = {
	name: string;
	username: string;
	password: string;
};

export type TSignIn = Omit<TSignUp, "name">;
