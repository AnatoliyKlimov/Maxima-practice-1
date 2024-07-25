import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { TBillingDetails } from "@/types";

type TBillingDetailsState = TBillingDetails & { saved: boolean };

const initialState: TBillingDetailsState = {
	firstName: "",
	companyName: "",
	streetAddress: "",
	apartment: "",
	city: "",
	phone: "",
	email: "",
	saved: false
};

export const slice = createSlice({
	name: "billingDetails",
	initialState,
	reducers: {
		save: (state, action: PayloadAction<TBillingDetails>) => {
			state.firstName = action.payload.firstName;
			state.companyName = action.payload.companyName;
			state.streetAddress = action.payload.streetAddress;
			state.apartment = action.payload.apartment;
			state.city = action.payload.city;
			state.phone = action.payload.phone;
			state.email = action.payload.email;

			state.saved = true;
		},
		clear: () => initialState
	}
});
