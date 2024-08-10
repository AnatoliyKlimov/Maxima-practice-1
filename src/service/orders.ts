import { ordersSlice, ordersSelectors } from "@/domain/orders";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ArrayElement } from "@/lib/utils";

import type { TCreateOrderDTO, TUpdateOrderDTO, TDeleteOrderDTO } from "@/types";

const { selectOrders, selectOrdersByStatus } = ordersSelectors;

type TOrdersHookOptions = {
	status: ArrayElement<RootState["orders"]>["status"];
};

export const useOrders = (params?: TOrdersHookOptions) => {
	const dispatch = useAppDispatch();

	const selector = useAppSelector((state) =>
		params?.status ? selectOrdersByStatus(state, params.status) : selectOrders(state)
	);

	const {
		createOrder: createOrderAction,
		updateOrder: updateOrderAction,
		deleteOrder: deleteOrderAction,
		clearOrders: clearOrdersAction
	} = ordersSlice.slice.actions;

	const createOrder = (data: TCreateOrderDTO) => {
		dispatch(createOrderAction(data));
	};

	const updateOrder = (data: TUpdateOrderDTO) => {
		dispatch(updateOrderAction(data));
	};

	const deleteOrder = (data: TDeleteOrderDTO) => {
		dispatch(deleteOrderAction(data));
	};

	const clearOrders = () => {
		dispatch(clearOrdersAction());
	};

	return [selector, { createOrder, updateOrder, deleteOrder, clearOrders }] as const;
};
