import { RootState } from "@/store";

type StateType = RootState["cart"];

type TCartProductsSelector = (state: RootState) => StateType;

export const selectCartProducts: TCartProductsSelector = (state) => state.cart;
