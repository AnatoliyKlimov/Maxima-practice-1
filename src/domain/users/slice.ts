import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TUser, TUserLoginDTO, TUsersState } from "@/types";

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

			state.currentUser = user || null;
		},
		logoutUser: (state) => {
			state.currentUser = null;
		},
		clearUsers: (state) => {
			state.users = [];
			state.currentUser = null;
		}
	}
});
