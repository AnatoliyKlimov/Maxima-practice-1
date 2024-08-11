"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/lib/ui/elements";

import ImageNotification from "@/images/icons/notification.svg";
import ImageAvatar from "@/images/avatar.png";

const pathnamesList = {
	"/admin": "Dashboard",
	"/admin/orders": "Order management",
	"/admin/customers": "Manage customers",
	"/admin/coupon": "Manage coupon codes",
	"/admin/categories": "Manage categories",
	"/admin/transactions": "Transactions",
	"/admin/brand": "Brand",
	"/admin/products/add": "Add new product",
	"/admin/products": "Manage products",
	"/admin/users": "Manage users",
	"/admin/users/roles": "Manage user roles"
};

/** @public */
export const Header: React.FC = () => {
	const pathname = usePathname();

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "20px 0"
			}}
		>
			<h2
				style={{
					fontSize: 24,
					fontWeight: 600,
					lineHeight: "22px"
				}}
			>
				{pathnamesList[pathname as keyof typeof pathnamesList]}
			</h2>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 24
				}}
			>
				<Button
					type="icon"
					style={{
						alignItems: "center",
						height: 32,
						width: 32,
						position: "relative",
						padding: 0,
						backgroundColor: "transparent"
					}}
				>
					<Image src={ImageNotification} alt="" draggable={false} />
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "absolute",
							top: -2,
							right: -4,
							height: 18,
							width: 18,
							borderRadius: "50%",
							backgroundColor: "var(--background-error)",
							fontSize: 12,
							color: "#fff"
						}}
					>
						<span>4</span>
					</div>
				</Button>
				<Image
					src={ImageAvatar}
					alt=""
					style={{
						backgroundColor: "#7367F0",
						borderRadius: "50%"
					}}
				/>
			</div>
		</div>
	);
};

/** @alias */
export default Header;
