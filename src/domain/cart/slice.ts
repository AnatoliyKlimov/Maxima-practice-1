import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { defaultCart } from "@/types/__mocks__";
import { TCartAddDTO, TCartUpdateDTO, TCartDeleteDTO } from "@/types";

export const slice = createSlice({
	name: "cart",
	initialState: defaultCart,
	reducers: {
		addCartProduct: (state, action: PayloadAction<TCartAddDTO>) => {
			const existingProduct = state.find((product) => product.id == action.payload.id);

			if (existingProduct) existingProduct.quantity++;
			else state.push({ id: action.payload.id, quantity: 1 });
		},
		updateCartProductQuantity: (state, action: PayloadAction<TCartUpdateDTO>) => {
			const existingProduct = state.find((product) => product.id == action.payload.id);

			if (existingProduct) existingProduct.quantity = action.payload.quantity;
		},
		deleteCartProduct: (state, action: PayloadAction<TCartDeleteDTO>) => {
			const existingProduct = state.find((product) => product.id == action.payload.id);

			if (existingProduct) return state.filter((product) => product.id != existingProduct.id);
		},
		clearCart: () => []
	}
});
