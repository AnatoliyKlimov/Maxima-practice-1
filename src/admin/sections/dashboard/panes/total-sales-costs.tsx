"use client";

import Image from "next/image";
import { Flex, MenuProps, Space } from "antd";

import { Pane } from "@/lib/ui/components";

import IconArrow from "@/images/charts/arrow-up.svg";
import Chart from "@/images/charts/top-sales-costs.svg";

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
			<div>
				<Image
					src={Chart}
					alt=""
					draggable={false}
					style={{ width: 360, marginBottom: -7, marginTop: 3 }}
				/>
			</div>
		</Pane>
	);
};
