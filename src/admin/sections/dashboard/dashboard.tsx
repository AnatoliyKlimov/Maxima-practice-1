"use client";

import { Flex } from "antd";

import {
	DiscountedAmountPane,
	SessionsPane,
	TotalOrdersPane,
	TotalProfitPane,
	TotalSalesCostsPane
} from "./panes";

/** @public */
export const DashboardSection: React.FC = () => {
	return (
		<Flex justify="space-between" gap={26} wrap>
			<TotalSalesCostsPane />
			<SessionsPane />
			<TotalOrdersPane />
			<TotalProfitPane />
			<DiscountedAmountPane />
		</Flex>
	);
};

/** @alias */
export default DashboardSection;
