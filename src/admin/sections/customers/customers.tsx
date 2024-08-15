"use client";

import { useState, useRef } from "react";
import Image from "next/image";

import { Flex, Input, Table, Space, Empty, Select, Button } from "antd";

import { usersSelectors } from "@/domain/users";
import { useAppSelector } from "@/store/hooks";
import type { TUser } from "@/types";

import IconSearch from "@/images/icons/search.svg";

const shownOptions = [10, 25, 50];

/** @public */
export const CustomersSection: React.FC = () => {
	const [searchText, setSearchText] = useState("");
	const [shown, setShown] = useState(shownOptions[0]);

	const customers = useAppSelector(usersSelectors.selectUsers);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	};

	const filteredCustomers = customers.filter(
		(customer) =>
			(customer.name && customer.name.toLowerCase().includes(searchText.toLowerCase())) ||
			(customer.email && customer.email.toLowerCase().includes(searchText.toLowerCase()))
	);

	const editCustomer = (id: number) => {
		// Логика для редактирования пользователя
		console.log(`Edit customer with id ${id}`);
		// Здесь можно добавить навигацию на страницу редактирования или модальное окно для редактирования
	};

	const blockCustomer = (id: number) => {
		// Логика для блокировки пользователя
		console.log(`Block customer with id ${id}`);
		// Здесь можно изменить состояние пользователя на заблокированное
	};

	const deleteCustomer = (id: number) => {
		// Логика для удаления пользователя
		console.log(`Delete customer with id ${id}`);
		// Здесь можно вызвать action для удаления пользователя из хранилища
	};

	const tableData = filteredCustomers.map((customer) => ({
		key: `customer-${customer.id}`,
		name: (
			<Flex vertical gap={5}>
				<span>{customer.name || "N/A"}</span>
				<span style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.5)" }}>
					{customer.email || "N/A"}
				</span>
			</Flex>
		),
		phone: customer.phone || "N/A",
		created: customer.createdAt || "N/A",
		action: (
			<Space size="middle">
				<Button type="link" onClick={() => editCustomer(customer.id)}>
					Edit
				</Button>
				<Button type="link" onClick={() => blockCustomer(customer.id)}>
					Block
				</Button>
				<Button type="link" danger onClick={() => deleteCustomer(customer.id)}>
					Delete
				</Button>
			</Space>
		)
	}));

	return (
		<Flex vertical gap={25}>
			<Input
				variant="borderless"
				placeholder="Search by customer name"
				onChange={handleSearch}
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
				pagination={{
					position: ["bottomRight"],
					showSizeChanger: false,
					showTotal: (total) => (
						<Flex gap={8}>
							<span style={{ lineHeight: "31px" }}>Showing</span>
							<Select
								className="table-pagination-select"
								options={shownOptions.map((value) => ({ value, label: value }))}
								value={shown}
								onChange={(value) => setShown(value)}
								style={{ width: 62 }}
							/>
							<span style={{ lineHeight: "31px" }}>of {total}</span>
						</Flex>
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
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							Phone Number
						</span>
					}
					dataIndex="phone"
					key="phone"
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							Created
						</span>
					}
					dataIndex="created"
					key="created"
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
		</Flex>
	);
};

/** @alias */
export default CustomersSection;
