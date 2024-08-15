"use client";

import { useState } from "react";
import Image from "next/image";

import { Input, Table, Space, Empty, Button, Pagination } from "antd";

import { useUsers } from "@/service/users";

import AvatarPlaceholder from "@/images/icons/avatar-placeholder.jpg"; // Заглушка для аватара
import IconEdit from "@/images/icons/edit.svg";
import IconBlock from "@/images/icons/block.svg";
import IconDelete from "@/images/icons/delete.svg";
import IconSearch from "@/images/icons/search.svg";

export const CustomersSection: React.FC = () => {
	const [searchText, setSearchText] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [shown, setShown] = useState(10);

	const [customers, , { deleteUser }] = useUsers();

	const filteredCustomers = customers.filter(
		(customer) =>
			customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
			customer.email.toLowerCase().includes(searchText.toLowerCase()) ||
			(customer.phone && customer.phone.includes(searchText))
	);

	const paginatedData = filteredCustomers.slice((currentPage - 1) * shown, currentPage * shown);

	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<Input
				variant="borderless"
				placeholder="Search..."
				onChange={(e) => setSearchText(e.target.value)}
				value={searchText}
				suffix={
					<Image
						src={IconSearch}
						alt=""
						height={15}
						width={15}
						style={{ opacity: "30%" }}
					/>
				}
				style={{
					width: 272,
					padding: "8px 16px",
					marginBottom: 18,
					backgroundColor: "white"
				}}
			/>
			<Table
				dataSource={paginatedData.map((customer) => ({
					key: `customer-${customer.id}`,
					name: (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 8
							}}
						>
							<Image
								src={AvatarPlaceholder}
								alt="Avatar"
								width={40}
								height={40}
								style={{ borderRadius: "50%" }}
							/>
							<div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
								<span>{customer.name}</span>
								<span style={{ fontSize: 12, color: "rgba(0, 0, 0, 0.5)" }}>
									{customer.email}
								</span>
							</div>
						</div>
					),
					phone: customer.phone || customer.email,
					created: customer.createdAt,
					action: (
						<Space size="middle">
							<Button
								type="link"
								icon={<Image src={IconEdit} alt="Edit" />}
								onClick={() => editCustomer(customer.id)}
							/>
							<Button
								type="link"
								icon={<Image src={IconBlock} alt="Block" />}
								onClick={() => blockCustomer(customer.id)}
							/>
							<Button
								type="link"
								danger
								icon={<Image src={IconDelete} alt="Delete" />}
								onClick={() => deleteUser({ ...customer })}
							/>
						</Space>
					)
				}))}
				columns={[
					{
						title: (
							<span style={{ fontSize: 13, fontWeight: 500, opacity: "50%" }}>
								NAME
							</span>
						),
						dataIndex: "name",
						key: "name",
						width: 272
					},
					{
						title: (
							<span style={{ fontSize: 13, fontWeight: 500, opacity: "50%" }}>
								PHONE NUMBER / EMAIL
							</span>
						),
						dataIndex: "phone",
						key: "phone",
						width: 272
					},
					{
						title: (
							<span style={{ fontSize: 13, fontWeight: 500, opacity: "50%" }}>
								CREATED
							</span>
						),
						dataIndex: "created",
						key: "created",
						width: 272
					},
					{
						title: (
							<span style={{ fontSize: 13, fontWeight: 500, opacity: "50%" }}>
								ACTION
							</span>
						),
						dataIndex: "action",
						key: "action",
						width: 272
					}
				]}
				locale={{
					emptyText: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No data" />
				}}
				pagination={false}
				bordered={false}
			/>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					backgroundColor: "white",
					borderRadius: "0 0 16px 16px"
				}}
			>
				<span style={{ padding: "16px 24px" }}>
					Showing {paginatedData.length} of {filteredCustomers.length}
				</span>
				<Pagination
					total={filteredCustomers.length}
					pageSize={shown}
					current={currentPage}
					onChange={(page) => setCurrentPage(page)}
					showSizeChanger={false}
					style={{ padding: "16px 24px" }}
				/>
			</div>
		</div>
	);
};

/** @alias */
export default CustomersSection;
