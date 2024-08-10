import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TUser, TUserLoginDTO, TUpdateUserDTO, TDeleteUserDTO, TUsersState } from "@/types";

const initialState: TUsersState = {
	users: [],
	currentUser: null
};

export const slice = createSlice({
	name: "users",
	initialState,
	reducers: {
		registerUser: (state, action: PayloadAction<TUser>) => {
			const existingUser = state.users.find(
				(user) => user.username == action.payload.username
			);

			if (!existingUser) {
				state.users.push(action.payload);

				state.currentUser = action.payload.username;
			}
		},
		loginUser: (state, action: PayloadAction<TUserLoginDTO>) => {
			const existingUser = state.users.find(
				(user) =>
					user.username == action.payload.username &&
					user.password == action.payload.password
			);

			state.currentUser = existingUser?.username || null;
		},
		logoutUser: (state) => void (state.currentUser = null),
		updateUser: (state, action: PayloadAction<TUpdateUserDTO>) => {
			const { username } = action.payload;

			let existingUser = state.users.find((user) => user.username == username);

			if (existingUser) {
				if (action.payload.email) existingUser.email = action.payload.email;
				if (action.payload.phone) existingUser.phone = action.payload.phone;
				if (action.payload.password) existingUser.password = action.payload.password;
				if (action.payload.firstName) existingUser.firstName = action.payload.firstName;
				if (action.payload.lastName) existingUser.lastName = action.payload.lastName;
				if (action.payload.address) existingUser.address = action.payload.address;
			}
		},
		deleteUser: (state, action: PayloadAction<TDeleteUserDTO>) => {
			const existingUser = state.users.find(
				(user) => user.username == action.payload.username
			);

			if (existingUser)
				state.users = state.users.filter((user) => user.username != existingUser.username);
		},
		clearUsers: (state) => {
			state.users = [];
			state.currentUser = null;
		}
	}
});
