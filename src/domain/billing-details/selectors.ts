import { RootState } from "@/store";

type StateType = RootState["billingDetails"];

type TBillingDetailsSelector = (state: RootState) => StateType;

export const selectBillingDetails: TBillingDetailsSelector = (state) => state.billingDetails;
