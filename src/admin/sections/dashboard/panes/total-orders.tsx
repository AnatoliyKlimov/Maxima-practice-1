"use client";

import Image from "next/image";
import { Flex, MenuProps, Space } from "antd";

import { Pane } from "@/lib/ui/components";

import IconArrow from "@/images/charts/arrow-up.svg";
import Chart from "@/images/charts/total-orders.svg";

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
				<Image src={Chart} alt="" draggable={false} style={{ width: 150, marginTop: 3 }} />
			</Flex>
		</Pane>
	);
};
