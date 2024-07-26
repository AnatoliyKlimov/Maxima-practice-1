import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { defaultWishlist } from "@/types/__mocks__";
import { TWishlistAddDTO, TWishlistDeleteDTO } from "@/types";

export const slice = createSlice({
	name: "wishlist",
	initialState: defaultWishlist,
	reducers: {
		addWishlistProduct: (state, action: PayloadAction<TWishlistAddDTO>) => {
			const existingProductID = state.find((productID) => productID == action.payload);

			if (!existingProductID) state.push(action.payload);
		},
		deleteWishlistProduct: (state, action: PayloadAction<TWishlistDeleteDTO>) => {
			const existingProductID = state.find((productID) => productID == action.payload);

			if (existingProductID)
				return state.filter((productID) => productID != existingProductID);
		},
		clearWishlist: () => []
	}
});
