"use client";

import Image from "next/image";
import type { ChartDataset } from "chart.js";

import { Flex, MenuProps, Space } from "antd";

import { Chart, chartHelpers } from "@/admin/components/Chart";
import { Pane } from "@/lib/ui/components";

import IconArrow from "@/images/charts/arrow-up.svg";

const { makeDataset, gradientFill } = chartHelpers;

const chartDatasets: ChartDataset<"line">[] = [
	makeDataset({
		fill: true,
		label: "Orders",
		data: [2.4, 2.75, 2.72, 2.65, 2.7, 3],
		borderColor: "#1EB564",
		backgroundColor: gradientFill([
			{
				offset: 0,
				color: "rgba(30, 181, 100, 0)"
			},
			{
				offset: 1,
				color: "rgba(30, 181, 100, 0.08)"
			}
		])
	})
];

const dropdownContent: MenuProps["items"] = [
	{
		key: "dropdown-item-update",
		label: <span>Update</span>
	},
	{
		key: "dropdown-item-print",
		label: <span>Print</span>
	},
	{
		key: "dropdown-item-save",
		label: <span>Save to file</span>
	}
];

export const TotalOrdersPane: React.FC = () => {
	return (
		<Pane
			dropdown={{
				menu: { items: dropdownContent },
				placement: "bottomLeft",
				trigger: ["click"]
			}}
			style={{
				display: "flex",
				justifyContent: "space-between",
				flexGrow: 1,
				minHeight: 198
			}}
		>
			<Flex vertical align="stretch" justify="space-between">
				<Flex vertical gap={4}>
					<h3
						style={{
							fontSize: 18,
							fontWeight: 600
						}}
					>
						Total Orders
					</h3>
					<Space
						style={{
							fontSize: 14,
							fontWeight: 500,
							color: "var(--foreground-semi)"
						}}
					>
						Last 7 days
					</Space>
				</Flex>
				<Flex vertical gap={16}>
					<h2
						style={{
							fontSize: 32,
							fontWeight: 800
						}}
					>
						25.7K
					</h2>
					<Space
						style={{
							fontSize: 14,
							fontWeight: 500
						}}
					>
						<Flex gap={4}>
							<Image src={IconArrow} alt="" />
							<span style={{ color: "var(--arrow-up)" }}>6%</span>
						</Flex>
						<span
							style={{
								fontSize: 14,
								fontWeight: 500,
								color: "var(--foreground-semi)"
							}}
						>
							vs last 7 days
						</span>
					</Space>
				</Flex>
			</Flex>
			<Flex align="flex-end">
				<Chart
					id="total-orders"
					type="line"
					datasets={chartDatasets}
					hasLegend={false}
					style={{ width: 150, height: 117 }}
				/>
			</Flex>
		</Pane>
	);
};
