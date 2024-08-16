"use client";

import Image from "next/image";
import type { ChartData, ChartDataset } from "chart.js";

import { Flex, MenuProps, Space } from "antd";

import { Chart, chartHelpers } from "@/admin/components/Chart";
import { Pane } from "@/lib/ui/components";

import IconArrow from "@/images/charts/arrow-up.svg";

const chartLabels: ChartData<"line">["labels"] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const chartDatasets: ChartDataset<"line">[] = [
	{
		fill: true,
		label: "Sales",
		data: [2, 3.83, 3.8, 4.2, 5.9, 7, 6.2],
		pointStyle: false,
		borderColor: "#0F60FF",
		backgroundColor: chartHelpers.gradientFill([
			{
				offset: 0,
				color: "rgba(15, 96, 255, 0)"
			},
			{
				offset: 1,
				color: "rgba(15, 96, 255, 0.08)"
			}
		]),
		tension: 0.4
	},
	{
		fill: true,
		label: "Cost",
		data: [0, 1.83, 1.8, 2.2, 3.9, 5, 4.2],
		pointStyle: false,
		borderColor: "#0FB7FF",
		backgroundColor: chartHelpers.gradientFill([
			{
				offset: 0,
				color: "rgba(15, 183, 255, 0)"
			},
			{
				offset: 1,
				color: "rgba(15, 183, 255, 0.08)"
			}
		]),
		tension: 0.4
	}
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

export const TotalSalesCostsPane: React.FC = () => {
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
						Total Sales & Costs
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
						$350K
						<span
							style={{
								marginLeft: 12,
								fontSize: 18,
								fontWeight: 700,
								color: "var(--badge-status-processing-text)"
							}}
						>
							$235K
						</span>
					</h2>
					<Space
						style={{
							fontSize: 14,
							fontWeight: 500
						}}
					>
						<Flex gap={4}>
							<Image src={IconArrow} alt="" />
							<span style={{ color: "var(--arrow-up)" }}>8.56K</span>
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
			<Chart
				id="total-sales-costs"
				type="line"
				labelsX={chartLabels}
				datasets={chartDatasets}
				style={{ width: 360, height: 117 }}
			/>
		</Pane>
	);
};
