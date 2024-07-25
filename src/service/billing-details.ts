import { billingDetailsSlice, billingDetailsSelectors } from "@/domain/billing-details";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { TBillingDetails } from "@/types";

const { selectBillingDetails } = billingDetailsSelectors;

export const useBillingDetails = () => {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => selectBillingDetails(state));

	const { saved, ...selectorData } = selector;

	const { save: saveAction, clear: clearAction } = billingDetailsSlice.slice.actions;

	const save = (data: TBillingDetails) => {
		dispatch(saveAction(data));
	};

	const clear = () => {
		dispatch(clearAction());
	};

	return [selectorData, saved, { save, clear }] as const;
};
