import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { defaultRecommendations } from "@/types/__mocks__";
import { TRecommendationAddDTO, TRecommendationDeleteDTO } from "@/types";

export const slice = createSlice({
	name: "recommendations",
	initialState: defaultRecommendations,
	reducers: {
		addRecommendProduct: (state, action: PayloadAction<TRecommendationAddDTO>) => {
			state.push(action.payload);
		},
		deleteRecommendProduct: (state, action: PayloadAction<TRecommendationDeleteDTO>) => {
			let existingProductID = state.find((productID) => productID == action.payload);

			if (existingProductID) {
				return state.filter((productID) => productID != existingProductID);
			} else {
				// TODO: Обработка ошибок
				return state;
			}
		},
		clearRecommendations: () => []
	}
});
