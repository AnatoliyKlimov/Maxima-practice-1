import { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

type StateType = RootState["users"];

type TUsersStateSelector = (state: RootState) => StateType;

const selectState: TUsersStateSelector = (state) => state.users;

export const selectUsers = createSelector([selectState], (state) => state.users);
export const selectCurrentUser = createSelector([selectState], (state) => state.currentUser);
