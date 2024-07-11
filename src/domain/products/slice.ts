import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { defaultProducts } from "@/types/__mocks__";
import { TAddProductDTO, TUpdateProductDTO, TDeleteProductDTO } from "@/types";

export const slice = createSlice({
	name: "products",
	initialState: defaultProducts,
	reducers: {
		addProduct: (state, action: PayloadAction<TAddProductDTO>) => {
			const newID = uuid();

			state.push({
				...action.payload,
				createdAt: new Date().toString(),
				id: newID
			});
		},
		updateProduct: (state, action: PayloadAction<TUpdateProductDTO>) => {
			const { id } = action.payload;

			let existingProduct = state.find((product) => product.id == id);

			if (existingProduct) {
				if (action.payload.title) existingProduct.title = action.payload.title;
				if (action.payload.type) existingProduct.type = action.payload.type;
				if (action.payload.image) existingProduct.image = action.payload.image;
				if (action.payload.imageFit) existingProduct.imageFit = action.payload.imageFit;
				if (action.payload.price) existingProduct.price = action.payload.price;
				if (action.payload.priceOld) existingProduct.priceOld = action.payload.priceOld;
				if (action.payload.isNew) existingProduct.isNew = action.payload.isNew;
				if (action.payload.discountPercent)
					existingProduct.discountPercent = action.payload.discountPercent;
				if (action.payload.rating) existingProduct.rating = action.payload.rating;
				if (action.payload.colors) existingProduct.colors = action.payload.colors;
			} else {
				// TODO: Обработка ошибок
			}
		},
		deleteProduct: (state, action: PayloadAction<TDeleteProductDTO>) => {
			const { id } = action.payload;

			let existingProduct = state.find((product) => product.id == id);

			if (existingProduct) {
				return state.filter((product) => product.id != existingProduct.id);
			} else {
				// TODO: Обработка ошибок
				return state;
			}
		},
		clearProducts: () => []
	}
});
