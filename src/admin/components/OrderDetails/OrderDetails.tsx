import Image from "next/image";

import { Dropdown, Flex, MenuProps, Table } from "antd";

import Button from "@/lib/ui/elements/Button";

import { TOrderExtended, TOrderProduct } from "@/types";

import IconPrint from "@/images/icons/print.svg";
import IconMenu from "@/images/icons/menu-dots.svg";

import "./OrderDetails.css";

interface IOrderDetailsProps {
	order: TOrderExtended;
}

const printContent: MenuProps["items"] = [
	{
		key: "print-format-pdf",
		label: "Portable Document (.pdf)"
	},
	{
		key: "print-format-word",
		label: "Microsoft Word (.docx)"
	},
	{
		key: "print-format-excel",
		label: "Microsoft Excel (.xslx)"
	}
];

/** @public */
export const OrderDetails: React.FC<IOrderDetailsProps> = ({ order }) => {
	return (
		<Table className="order-summary-table" dataSource={order.products} pagination={false}>
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
			<Table.Column<TOrderProduct>
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
				render={(text) => `#${text}`}
			/>
			<Table.Column<TOrderProduct>
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
				render={(text) => <span style={{ fontWeight: 600 }}>{text}</span>}
			/>
			<Table.Column<TOrderProduct>
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
				render={(_, { price, priceOld }) => `$${(priceOld || price).toFixed(2)}`}
			/>
			<Table.Column<TOrderProduct>
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
				render={(text) => `x${text}`}
			/>
			<Table.Column<TOrderProduct>
				title={
					<span
						style={{
							fontSize: 13,
							fontWeight: 400,
							opacity: "50%"
						}}
					>
						DISC.
					</span>
				}
				dataIndex="discount"
				key="discount"
				render={(_, { discount }) =>
					discount > 0 ? (
						<span style={{ color: "var(--background-error)" }}>{discount}%</span>
					) : (
						<span style={{ color: "var(--badge-discount-text)" }}>0%</span>
					)
				}
			/>
			<Table.Column<TOrderProduct>
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
				render={(_, { total }) => `$${total.toFixed(2)}`}
			/>
			<Table.Column
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
				render={() => (
					<Flex>
						<Dropdown
							menu={{ items: printContent }}
							placement="bottomLeft"
							trigger={["click"]}
						>
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
						</Dropdown>
					</Flex>
				)}
			/>
		</Table>
	);
};

/** @alias */
export default OrderDetails;
