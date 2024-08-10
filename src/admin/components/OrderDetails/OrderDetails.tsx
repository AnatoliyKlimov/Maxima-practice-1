"use client";

import Image from "next/image";

import { Dropdown, Flex, MenuProps, Table } from "antd";

import Button from "@/lib/ui/elements/Button";
import { capitalize } from "@/lib/utils";

import { TOrderExtended, TOrderProduct } from "@/types";

import IconPrint from "@/images/icons/print.svg";
import IconMenu from "@/images/icons/menu-dots.svg";

import "./OrderDetails.css";

type TOrderSummaryRow = Partial<TOrderProduct> & {
	summaryDataIndex?: keyof Pick<TOrderExtended, "subtotal" | "shipping" | "discount" | "total">;
};

interface IOrderDetailsProps {
	order: TOrderExtended;
}

const printContent: MenuProps["items"] = [
	{
		key: "print-format-pdf",
		label: <span>Portable Document (.pdf)</span>
	},
	{
		key: "print-format-excel",
		label: <span>Microsoft Excel (.xslx)</span>
	},
	{
		key: "print-format-csv",
		label: <span>Comma-Separated Values (.csv)</span>
	}
];

/** @public */
export const OrderDetails: React.FC<IOrderDetailsProps> = ({ order }) => {
	const tableData: TOrderSummaryRow[] = [
		...order.products,
		{ key: "summary-subtotal", summaryDataIndex: "subtotal" },
		{ key: "summary-shipping", summaryDataIndex: "shipping" },
		{ key: "summary-discount", summaryDataIndex: "discount" },
		{ key: "summary-total", summaryDataIndex: "total" }
	];

	return (
		<Table className="order-summary-table" dataSource={tableData} pagination={false}>
			<Table.Column
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						#
					</span>
				}
				key="id"
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						SKU
					</span>
				}
				dataIndex="id"
				key="sku"
				render={(_, { id, summaryDataIndex }) => (summaryDataIndex ? "" : `#${id}`)}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						NAME
					</span>
				}
				dataIndex="title"
				key="title"
				render={(_, { title, summaryDataIndex }) =>
					summaryDataIndex ? "" : <span style={{ fontWeight: 600 }}>{title}</span>
				}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						PRICE
					</span>
				}
				dataIndex="price"
				key="price"
				render={(_, { price, priceOld, summaryDataIndex }) =>
					summaryDataIndex ? "" : `$${(priceOld || price)?.toFixed(2)}`
				}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						QTY
					</span>
				}
				dataIndex="quantity"
				key="quantity"
				render={(_, { quantity, summaryDataIndex }) =>
					summaryDataIndex ? capitalize(summaryDataIndex) : `x${quantity}`
				}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						DISCOUNT
					</span>
				}
				dataIndex="discount"
				key="discount"
				render={(_, { discount, summaryDataIndex }) =>
					summaryDataIndex ? (
						""
					) : discount && discount > 0 ? (
						<span style={{ color: "var(--background-error)" }}>{discount}%</span>
					) : (
						<span style={{ color: "var(--badge-discount-text)" }}>0%</span>
					)
				}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						TOTAL
					</span>
				}
				dataIndex="total"
				key="total"
				render={(_, { total, summaryDataIndex }) => {
					if (summaryDataIndex) {
						const summaryValue = order[summaryDataIndex];

						if (summaryDataIndex == "discount")
							return (
								<span
									style={{
										color: `var(${summaryValue > 0 ? "--background-error" : "--badge-discount-text"})`
									}}
								>
									${summaryValue}
								</span>
							);

						return summaryValue == 0 ? "Free" : `$${summaryValue?.toFixed(2)}`;
					}

					return `$${total?.toFixed(2)}`;
				}}
			/>
			<Table.Column<TOrderSummaryRow>
				title={
					<Flex align="center" gap={6} style={{ marginBottom: -3 }}>
						<Image src={IconPrint} alt="" />
						<span
							style={{
								fontSize: 13,
								fontWeight: 400,
								opacity: "50%"
							}}
						>
							PRINT
						</span>
					</Flex>
				}
				key="print"
				render={(_, { summaryDataIndex }) =>
					!summaryDataIndex && (
						<Flex>
							<Dropdown
								menu={{ items: printContent }}
								placement="bottomLeft"
								trigger={["click"]}
							>
								<Flex>
									<Button
										type="icon"
										className="product-print-button"
										style={{
											alignItems: "center",
											height: 24,
											width: 24,
											padding: 0,
											backgroundColor: "transparent",
											borderRadius: 4
										}}
									>
										<Image src={IconMenu} alt="" />
									</Button>
								</Flex>
							</Dropdown>
						</Flex>
					)
				}
			/>
		</Table>
	);
};

/** @alias */
export default OrderDetails;
