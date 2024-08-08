import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { TOrder, TCreateOrderDTO, TUpdateOrderDTO, TDeleteOrderDTO } from "@/types";

const initialState: TOrder[] = [];

export const slice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		createOrder: (state, action: PayloadAction<TCreateOrderDTO>) => {
			state.push({ id: state.length + 1, ...action.payload });
		},
		updateOrder: (state, action: PayloadAction<TUpdateOrderDTO>) => {
			const existingOrder = state.find((order) => order.id == action.payload.id);

			if (existingOrder) {
				if (action.payload.paymentMethod)
					existingOrder.paymentMethod = action.payload.paymentMethod;
				if (action.payload.billingDetails)
					existingOrder.billingDetails = action.payload.billingDetails;
				if (action.payload.status) existingOrder.status = action.payload.status;
			}
		},
		deleteOrder: (state, action: PayloadAction<TDeleteOrderDTO>) => {
			const existingOrder = state.find((order) => order.id == action.payload.id);

			if (existingOrder) return state.filter((order) => order.id != existingOrder.id);
		},
		clearOrders: () => []
	}
});
