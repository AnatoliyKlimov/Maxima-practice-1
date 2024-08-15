"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Input, Table, Space, Empty, Select, Button, Tooltip } from "antd";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";

import IconSearch from "@/images/icons/search.svg";
import type { TUser } from "@/types";
import { useUsers } from "@/service/users";

type DataIndex = keyof TUser;

const shownOptions = [10, 25, 50];

export const CustomersSection: React.FC = () => {
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState<DataIndex | "">("");
	const [shown, setShown] = useState(shownOptions[0]);

	const [customers, , { deleteUser }] = useUsers();

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

	const getColumnSearchProps = (dataIndex: DataIndex) => ({
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
						icon={<Image src={IconSearch} alt="" style={{ filter: "invert(100%)" }} />}
					>
						Find
					</Button>
					<Button onClick={() => clearFilters && handleReset(clearFilters, confirm)}>
						Clear
					</Button>
					<Button type="link" size="middle" onClick={() => close()}>
						Close
					</Button>
				</Space>
			</div>
		),
		filterIcon: () => (
			<Tooltip
				title="Click to search"
				trigger={["hover"]}
				overlayStyle={{ fontSize: 14 }}
				overlayInnerStyle={{ paddingTop: 5 }}
				color="#0f60ff"
			>
				<Image src={IconSearch} alt="" style={{ opacity: "30%" }} />
			</Tooltip>
		),
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
		render: (text: string) =>
			searchedColumn === dataIndex ? (
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

	const handleDelete = (id: number) => {
		const userToDelete = customers.find((user) => user.id === id);
		if (userToDelete) {
			deleteUser({ username: userToDelete.username });
		} else {
			console.error("User not found");
		}
	};

	const editCustomer = (id: number) => {
		// Logic to edit the customer
	};

	const blockCustomer = (id: number) => {
		// Logic to block the customer from changes
	};

	const tableData = customers.map((customer) => ({
		key: `customer-${customer.id}`,
		name: (
			<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
				<span>{customer.name}</span>
				<span style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.5)" }}>{customer.email}</span>
			</div>
		),
		phone: customer.phone,
		created: customer.createdAt,
		action: (
			<Space size="middle">
				<Button type="link" onClick={() => editCustomer(customer.id)}>
					Edit
				</Button>
				<Button type="link" onClick={() => blockCustomer(customer.id)}>
					Block
				</Button>
				<Button type="link" danger onClick={() => handleDelete(customer.id)}>
					Delete
				</Button>
			</Space>
		)
	}));

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
			<Input
				variant="borderless"
				placeholder="Search by customer name"
				onChange={(e) => setSearchText(e.target.value)}
				suffix={
					<Image
						src={IconSearch}
						alt=""
						height={18}
						width={18}
						style={{ opacity: "30%" }}
					/>
				}
				style={{
					width: 200,
					padding: "8px 16px",
					backgroundColor: "#fff",
					color: "var(--foreground-semi)",
					boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.04)"
				}}
			/>
			<Table
				dataSource={tableData}
				locale={{
					emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
				}}
				showSorterTooltip={{
					title: "Click to sort",
					overlayStyle: { fontSize: 14 },
					overlayInnerStyle: { paddingTop: 5 },
					color: "#0f60ff"
				}}
				pagination={{
					position: ["bottomRight"],
					itemRender: (_page, _type, element) =>
						shown < tableData.length ? element : null,
					showSizeChanger: false,
					showTotal: (total) => (
						<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
							<span>Showing</span>
							<Select
								className="table-pagination-select"
								options={shownOptions.map((value) => ({ value, label: value }))}
								value={shown}
								onChange={(value) => setShown(value)}
								style={{ width: 62 }}
							/>
							<span>of {total}</span>
						</div>
					),
					hideOnSinglePage: true,
					pageSize: shown
				}}
			>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>Name</span>
					}
					dataIndex="name"
					key="name"
					{...getColumnSearchProps("name")}
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							Phone Number
						</span>
					}
					dataIndex="phone"
					key="phone"
					{...getColumnSearchProps("phone")}
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							Created
						</span>
					}
					dataIndex="created"
					key="created"
					{...getColumnSearchProps("created")}
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							Action
						</span>
					}
					dataIndex="action"
					key="action"
				/>
			</Table>
		</div>
	);
};

export default CustomersSection;
