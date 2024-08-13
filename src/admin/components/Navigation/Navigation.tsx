"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { GetProp, Menu, MenuProps } from "antd";

import IconDashboard from "@/images/icons/admin/dashboard.svg";
import IconOrderManagement from "@/images/icons/admin/order-managment.svg";
import IconCustomers from "@/images/icons/admin/customers.svg";
import IconCouponCode from "@/images/icons/admin/coupon-code.svg";
import IconCategories from "@/images/icons/admin/categories.svg";
import IconTransactions from "@/images/icons/admin/transactions.svg";
import IconBrand from "@/images/icons/admin/brand.svg";
import IconAddProduct from "@/images/icons/admin/add-products.svg";
import IconProductList from "@/images/icons/admin/product-list.svg";
import IconManageAdmins from "@/images/icons/admin/manage-admins.svg";
import IconAdminRoles from "@/images/icons/admin/admin-roles.svg";

import styles from "./Navigation.module.css";

type MenuItem = GetProp<MenuProps, "items">[number];

/** @public */
export const Navigation: React.FC = () => {
	const pathname = usePathname();

	const navItems: MenuItem[] = [
		{
			type: "group",
			className: styles.navItemGroup,
			label: "MAIN MENU",
			children: [
				{
					key: "/admin",
					className: styles.navItem,
					icon: <Image src={IconDashboard} alt="" />,
					label: <Link href="/admin">Dashboard</Link>
				},
				{
					key: "/admin/orders",
					className: styles.navItem,
					icon: <Image src={IconOrderManagement} alt="" />,
					label: <Link href="/admin/orders">Order Management</Link>
				},
				{
					key: "/admin/customers",
					className: styles.navItem,
					icon: <Image src={IconCustomers} alt="" />,
					label: <Link href="/admin/customers">Customers</Link>
				},
				{
					key: "/admin/coupon",
					className: styles.navItem,
					icon: <Image src={IconCouponCode} alt="" />,
					label: <Link href="/admin/coupon">Coupon Code</Link>
				},
				{
					key: "/admin/categories",
					className: styles.navItem,
					icon: <Image src={IconCategories} alt="" />,
					label: <Link href="/admin/coupon">Categories</Link>
				},
				{
					key: "/admin/transactions",
					className: styles.navItem,
					icon: <Image src={IconTransactions} alt="" />,
					label: <Link href="/admin/transactions">Transactions</Link>
				},
				{
					key: "/admin/brand",
					className: styles.navItem,
					icon: <Image src={IconBrand} alt="" />,
					label: <Link href="/admin/brand">Brand</Link>
				}
			]
		},
		{
			type: "group",
			className: styles.navItemGroup,
			label: "PRODUCTS",
			children: [
				{
					key: "/admin/products/add",
					className: styles.navItem,
					icon: <Image src={IconAddProduct} alt="" />,
					label: <Link href="/admin/products/add">Add Product</Link>
				},
				{
					key: "/admin/products",
					className: styles.navItem,
					icon: <Image src={IconProductList} alt="" />,
					label: <Link href="/admin/products">Product List</Link>
				}
			]
		},
		{
			type: "group",
			className: styles.navItemGroup,
			label: "USERS",
			children: [
				{
					key: "/admin/users",
					className: styles.navItem,
					icon: <Image src={IconManageAdmins} alt="" />,
					label: <Link href="/admin/users">Manage Users</Link>
				},
				{
					key: "/admin/users/roles",
					className: styles.navItem,
					icon: <Image src={IconAdminRoles} alt="" />,
					label: <Link href="/admin/users/roles">User Roles</Link>
				}
			]
		}
	];

	return (
		<Menu
			selectedKeys={[pathname]}
			items={navItems}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 18,
				marginTop: -16,
				padding: "0 14px",
				borderInlineEnd: "none"
			}}
		/>
	);
};

/** @alias */
export default Navigation;
