"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Input, Table, Space, Empty, Button, Flex, Select } from "antd";

import { useUsers } from "@/service/users";

import type { TUser } from "@/types";

import AvatarPlaceholder from "@/images/avatar-placeholder.jpg";
import IconEdit from "@/images/icons/edit.svg";
import IconBlock from "@/images/icons/block.svg";
import IconDelete from "@/images/icons/delete.svg";
import IconSearch from "@/images/icons/search.svg";

const shownOptions = [10, 25, 50];

export const UsersSection: React.FC = () => {
	const [shown, setShown] = useState(shownOptions[0]);
	const [searchText, setSearchText] = useState("");

	const [users, , { deleteUser }] = useUsers();

	const filteredBySearchText =
		searchText != ""
			? (users as TUser[]).filter(
					(user) =>
						user.firstName?.toLowerCase().includes(searchText.toLowerCase()) ||
						user.lastName?.toLowerCase().includes(searchText.toLowerCase()) ||
						user.email?.toLowerCase().includes(searchText.toLowerCase()) ||
						user.phone?.includes(searchText)
				)
			: (users as TUser[]);

	const [paginationVisible, setPaginationVisible] = useState(shown < filteredBySearchText.length);

	const tableData = filteredBySearchText.map((user) => ({
		key: `user-${user.username}`,
		name: (
			<Flex align="center" gap={8}>
				<Image
					src={AvatarPlaceholder}
					alt="Avatar"
					width={32}
					height={32}
					style={{ borderRadius: "50%" }}
				/>
				<Flex vertical style={{ lineHeight: "20px" }}>
					<span
						style={{ fontWeight: 600 }}
					>{`${user.firstName ? user.firstName : "Guest"} ${user.firstName && user.lastName ? user.lastName : ""}`}</span>
					<span style={{ fontSize: 15, opacity: "50%" }}>{user.email}</span>
				</Flex>
			</Flex>
		),
		phone: user.phone || user.email,
		createdAt: user.createdAt,
		action: (
			<Space size={15}>
				<Button
					type="link"
					icon={<Image src={IconEdit} alt="Edit" />}
					style={{ padding: 0, width: 24, height: 24 }}
				/>
				<Button
					type="link"
					icon={<Image src={IconBlock} alt="Block" />}
					style={{ padding: 0, width: 24, height: 24 }}
				/>
				<Button
					type="link"
					icon={<Image src={IconDelete} alt="Delete" style={{ opacity: "50%" }} />}
					style={{ padding: 0, width: 24, height: 24 }}
					onClick={() => deleteUser({ username: user.username })}
				/>
			</Space>
		)
	}));

	useEffect(() => {
		setPaginationVisible(shown < tableData.length);
	}, [shown, tableData.length]);

	return (
		<Flex vertical gap={25}>
			<Input
				variant="borderless"
				placeholder="Search..."
				onChange={(e) => setSearchText(e.target.value)}
				value={searchText}
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
					itemRender: (_page, _type, element) => (paginationVisible ? element : null),
					showSizeChanger: false,
					showTotal: (total) => (
						<Flex gap={8}>
							<span style={{ lineHeight: "31px" }}>Showing</span>
							<Select
								className="table-pagination-select"
								options={shownOptions.map((value) => ({ value, label: value }))}
								disabled={shownOptions[0] >= total}
								value={shown}
								onChange={(value) => setShown(Number(value))}
								style={{ width: 62 }}
							/>
							<span style={{ lineHeight: "31px" }}>of {total}</span>
						</Flex>
					),
					pageSize: shown
				}}
				bordered={false}
			>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>NAME</span>
					}
					dataIndex="name"
					key="name"
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							PHONE / EMAIL
						</span>
					}
					dataIndex="phone"
					key="phone"
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							CREATED
						</span>
					}
					dataIndex="createdAt"
					key="createdAt"
					sorter={(a, b) =>
						a.createdAt && b.createdAt
							? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
							: 0
					}
					render={(_, { createdAt }) =>
						createdAt ? new Date(createdAt).toLocaleString() : "-"
					}
				/>
				<Table.Column<TUser>
					title={
						<span style={{ fontSize: 13, fontWeight: 400, opacity: "50%" }}>
							ACTION
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
export default UsersSection;
