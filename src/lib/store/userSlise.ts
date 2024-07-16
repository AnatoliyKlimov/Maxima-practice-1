import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
	name: string;
	phone: string;
	password: string;
}

interface UserState {
	users: User[];
	currentUser: User | null;
}

const initialState: UserState = {
	users: [],
	currentUser: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		registerUser: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload);
		},
		loginUser: (state, action: PayloadAction<{ phone: string; password: string }>) => {
			const user = state.users.find(
				(user) => user.phone === action.payload.phone && user.password === action.payload.password
			);
			state.currentUser = user || null;
		},
		logoutUser: (state) => {
			state.currentUser = null;
		},
	},
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
