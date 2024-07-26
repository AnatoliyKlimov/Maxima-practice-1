import { usersSlice, usersSelectors } from "@/domain/users";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ArrayElement } from "@/lib/utils";

import { TUser, TUserLoginDTO, TUpdateUserDTO, TDeleteUserDTO } from "@/types";

const { selectUsers, selectUserByName, selectCurrentUser } = usersSelectors;

type TUsersHookOptions = {
	name: ArrayElement<RootState["users"]["users"]>["name"];
};

export const useUsers = (params?: TUsersHookOptions) => {
	const dispatch = useAppDispatch();

	const selector = useAppSelector((state) =>
		params?.name ? selectUserByName(state, params.name) : selectUsers(state)
	);

	const {
		registerUser: registerUserAction,
		loginUser: loginUserAction,
		logoutUser: logoutUserAction,
		updateUser: updateUserAction,
		deleteUser: deleteUserAction,
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

	const updateUser = (data: TUpdateUserDTO) => {
		dispatch(updateUserAction(data));
	};

	const deleteUser = (data: TDeleteUserDTO) => {
		dispatch(deleteUserAction(data));
	};

	const clearWishlist = () => {
		dispatch(clearUsersAction());
	};

	return [
		selector,
		useAppSelector((state) => selectCurrentUser(state)),
		{ registerUser, loginUser, logoutUser, updateUser, deleteUser, clearWishlist }
	] as const;
};
