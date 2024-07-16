import { usersSlice, usersSelectors } from "@/domain/users";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TUser, TUserLoginDTO } from "@/types";

const { selectUsers, selectCurrentUser } = usersSelectors;

export const useUsers = () => {
	const dispatch = useAppDispatch();

	const {
		registerUser: registerUserAction,
		loginUser: loginUserAction,
		logoutUser: logoutUserAction,
		clearUsers: clearUsersAction
	} = usersSlice.slice.actions;

	const registerUser = (data: TUser) => {
		dispatch(registerUserAction(data));
	};

	const loginUser = (data: TUserLoginDTO) => {
		dispatch(loginUserAction(data));
	};

	const logoutUser = () => {
		dispatch(logoutUserAction());
	};

	const clearWishlist = () => {
		dispatch(clearUsersAction());
	};

	return [
		useAppSelector((state) => selectUsers(state)),
		useAppSelector((state) => selectCurrentUser(state)),
		{ registerUser, loginUser, logoutUser, clearWishlist }
	] as const;
};
