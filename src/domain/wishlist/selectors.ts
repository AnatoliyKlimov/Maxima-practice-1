import { RootState } from "@/store";

type StateType = RootState["wishlist"];

type TWishlistProductsSelector = (state: RootState) => StateType;

export const selectWishlistProducts: TWishlistProductsSelector = (state) => state.wishlist;
