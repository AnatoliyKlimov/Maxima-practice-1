import { RootState } from "@/store";

type StateType = RootState["wishlist"];

export type TWishlistProductsSelector = (state: RootState) => StateType;

export const selectWishlistProducts: TWishlistProductsSelector = (state) => state.wishlist;
