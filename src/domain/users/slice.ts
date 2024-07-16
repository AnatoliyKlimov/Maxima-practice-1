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
			state.users.push(action.payload);
		},
		loginUser: (state, action: PayloadAction<TUserLoginDTO>) => {
			const user = state.users.find(
				(user) =>
					user.phone == action.payload.phone && user.password == action.payload.password
			);

			state.currentUser = user?.name || null;
		},
		logoutUser: (state) => {
			state.currentUser = null;
		},
		updateUser: (state, action: PayloadAction<TUpdateUserDTO>) => {
			const { name } = action.payload;

			let existingUser = state.users.find((user) => user.name == name);

			if (existingUser) {
				if (action.payload.phone) existingUser.phone = action.payload.phone;
				if (action.payload.password) existingUser.password = action.payload.password;
				if (action.payload.firstName) existingUser.firstName = action.payload.firstName;
				if (action.payload.lastName) existingUser.lastName = action.payload.lastName;
				if (action.payload.address) existingUser.address = action.payload.address;
			} else {
				// TODO: Обработка ошибок
			}
		},
		deleteUser: (state, action: PayloadAction<TDeleteUserDTO>) => {
			const { name } = action.payload;

			let existingUser = state.users.find((user) => user.name == name);

			if (existingUser) {
				state.users = state.users.filter((user) => user.name != existingUser.name);
			}
		},
		clearUsers: (state) => {
			state.users = [];
			state.currentUser = null;
		}
	}
});
