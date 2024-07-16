import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { ArrayElement } from "@/lib/utils";

type StateType = RootState["users"];
type StateElementType = ArrayElement<StateType["users"]>;
type UserNameType = StateElementType["name"];

type TUsersStateSelector = (state: RootState) => StateType;
type TUserNameSelector = (state: RootState, userName: UserNameType) => UserNameType;

const selectState: TUsersStateSelector = (state) => state.users;
const selectUserName: TUserNameSelector = (_, userName) => userName;

export const selectUsers = createSelector([selectState], (state) => state.users);

export const selectUserByName = createSelector([selectState, selectUserName], (state, userName) =>
	state.users.find((user) => user.name == userName)
);

export const selectCurrentUser = createSelector([selectState], (state) =>
	state.users.find((user) => user.name == state.currentUser)
);
