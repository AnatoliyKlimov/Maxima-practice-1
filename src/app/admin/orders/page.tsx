"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Highlighter from "react-highlight-words";

import {
	Menu,
	Flex,
	Input,
	Table,
	InputRef,
	TableColumnType,
	Button,
	Space,
	Empty,
	Select
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";

import { useOrders } from "@/service/orders";

import type { TOrder, TOrderStatus } from "@/types";

import IconSearch from "@/images/icons/search.svg";
import { capitalize } from "@/lib/utils";

const { Search } = Input;

type DataType = Pick<TOrder, "id" | "createdAt" | "status"> & {
	key: string;
	customer: TOrder["billingDetails"]["firstName"];
	total: number;
	profit: number;
};

type DataIndex = keyof DataType;

const orderStatuses: TOrderStatus[] = [
	"pending",
	"confirmed",
	"processing",
	"picked",
	"shipped",
	"delivered",
	"cancelled"
];

const profitPercent = 16;

export default function OrdersPage() {
	const [filteredByStatus, setFilteredByStatus] = useState("");
	const [filteredByDateRange, setFilteredByDateRange] = useState("range");
	const [filteredByID, setFilteredByID] = useState("");

	const [orders, { updateOrder, deleteOrder }] = useOrders();

	const ordersFilteredByStatus =
		filteredByStatus != ""
			? orders.filter((order) => order.status == filteredByStatus)
			: orders;

	// Не сделано, т. к. не нужно по ТЗ
	const ordersFilteredByDateRange = ordersFilteredByStatus;

	const ordersFilteredByID =
		filteredByID != ""
			? ordersFilteredByDateRange.filter((order) =>
					order.id.toString().toLowerCase().includes(filteredByID.toLowerCase())
			  )
			: ordersFilteredByDateRange;

	const tableData: DataType[] = ordersFilteredByID.map((order) => ({
		id: order.id,
		key: `order-${order.id}`,
		createdAt: order.createdAt,
		customer: order.billingDetails.firstName,
		total: order.productsParsed.reduce(
			(acc, product) => acc + product.price * product.quantity,
			0
		),
		profit: Math.floor(
			(order.productsParsed.reduce(
				(acc, product) => acc + product.price * product.quantity,
				0
			) /
				100) *
				profitPercent
		),
		status: order.status
	}));

	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const searchInput = useRef<InputRef>(null);

	const handleSearch = (
		selectedKeys: string[],
		confirm: FilterDropdownProps["confirm"],
		dataIndex: DataIndex
	) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps["confirm"]) => {
		clearFilters();
		confirm();
		setSearchText("");
	};

	const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
			<div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
				<Input
					ref={searchInput}
					placeholder={`Search ${dataIndex}`}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
					style={{ marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
					>
						<div
							style={{
								display: "inline-flex",
								alignItems: "center"
							}}
						>
							<Image src={IconSearch} alt="" style={{ filter: "invert(100%)" }} />
							<span>Find</span>
						</div>
					</Button>
					<Button onClick={() => clearFilters && handleReset(clearFilters, confirm)}>
						Clear
					</Button>
					<Button
						type="link"
						onClick={() => {
							confirm();
							setSearchText((selectedKeys as string[])[0]);
							setSearchedColumn(dataIndex);
						}}
					>
						Apply
					</Button>
					<Button type="link" size="middle" onClick={() => close()}>
						Close
					</Button>
				</Space>
			</div>
		),
		filterIcon: () => <Image src={IconSearch} alt="" style={{}} />,
		onFilter: (value, record) =>
			record[dataIndex]
				.toString()
				.toLowerCase()
				.includes((value as string).toLowerCase()),
		onFilterDropdownOpenChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.current?.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn == dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			)
	});

	return (
		<Flex vertical gap={25}>
			<Menu
				mode="horizontal"
				items={[
					{ key: "all", label: "All" },
					...orderStatuses.map((status) => ({
						key: status,
						label: capitalize(status)
					}))
				]}
				defaultSelectedKeys={["all"]}
				onSelect={({ selectedKeys }) =>
					setFilteredByStatus(selectedKeys[0] == "all" ? "" : selectedKeys[0])
				}
				style={{ backgroundColor: "transparent" }}
			/>
			<Flex justify="space-between">
				<Input
					variant="borderless"
					placeholder="Search by order ID"
					onChange={(e) => setFilteredByID(e.target.value)}
					style={{
						width: 200,
						padding: "8px 16px",
						backgroundColor: "#fff",
						boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)"
					}}
				/>
				<Select
					variant="borderless"
					options={[
						{
							value: "range",
							label: <span style={{ padding: "0 5px" }}>Filter by date range</span>
						}
					]}
					value={filteredByDateRange}
					onChange={(value) => setFilteredByDateRange(value)}
					style={{
						padding: "4px 0",
						height: "unset",
						backgroundColor: "#fff",
						boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)",
						borderRadius: 4
					}}
				/>
			</Flex>
			<Table
				dataSource={tableData}
				locale={{
					emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
				}}
				showSorterTooltip={{
					title: "Click to sort",
					overlayStyle: { fontSize: 14 }
				}}
				pagination={{
					position: ["bottomRight"],
					hideOnSinglePage: true,
					showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
					pageSize: 10
				}}
				style={{ overflowX: "auto" }}
			>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>ID</span>
					}
					dataIndex="id"
					key="id"
					sortDirections={["ascend", "descend", "ascend"]}
					defaultSortOrder="descend"
					sorter={(a, b) => a.id - b.id}
					render={(text) => <span style={{ fontWeight: 600 }}>#{text}</span>}
				/>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							CREATED
						</span>
					}
					dataIndex="createdAt"
					key="createdAt"
					sortDirections={["ascend", "descend", "ascend"]}
					sorter={(a, b) =>
						a.createdAt && b.createdAt
							? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
							: 0
					}
					render={(_, { createdAt }) =>
						createdAt ? new Date(createdAt).toLocaleString() : "-"
					}
				/>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							CUSTOMER
						</span>
					}
					dataIndex="customer"
					key="customer"
					{...getColumnSearchProps("customer")}
				/>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>TOTAL</span>
					}
					dataIndex="total"
					key="total"
					sortDirections={["ascend", "descend", "ascend"]}
					sorter={(a, b) => a.total - b.total}
					render={(text) => `$${text}`}
				/>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							PROFIT
						</span>
					}
					dataIndex="profit"
					key="profit"
					sortDirections={["ascend", "descend", "ascend"]}
					sorter={(a, b) => a.profit - b.profit}
					render={(text) => (
						<span>
							${text}
							<span className="badge badge-profit" style={{ marginLeft: 4 }}>
								{profitPercent}%
							</span>
						</span>
					)}
				/>
				<Table.Column<DataType>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							STATUS
						</span>
					}
					dataIndex="status"
					key="status"
					render={(_, { id, status }) => (
						<Select
							variant="borderless"
							options={orderStatuses.map((status) => ({
								value: status,
								label: (
									<span
										style={{
											color: `var(--badge-status-${status}-text)`
										}}
									>
										{capitalize(status)}
									</span>
								)
							}))}
							value={status}
							onChange={(value) => updateOrder({ id, status: value })}
							style={{
								height: 26,
								width: 130,
								backgroundColor: `var(--badge-status-${status}-background)`,
								borderRadius: 4
							}}
						/>
					)}
				/>
			</Table>
		</Flex>
	);
}
