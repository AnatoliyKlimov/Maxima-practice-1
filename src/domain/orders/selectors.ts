import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { ArrayElement } from "@/lib/utils";

type StateType = RootState["orders"];
type StateElementType = ArrayElement<StateType>;
type OrderStatusType = StateElementType["status"];

type TOrdersSelector = (state: RootState) => StateType;
type TOrderStatusSelector = (state: RootState, status: OrderStatusType) => OrderStatusType;

const selectOrderStatus: TOrderStatusSelector = (_, status) => status;

export const selectOrders: TOrdersSelector = (state) => state.orders;

export const selectOrdersByStatus = createSelector(
	[selectOrders, selectOrderStatus],
	(orders, status) => orders.filter((orders) => orders.status == status)
);
