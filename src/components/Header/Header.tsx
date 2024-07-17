"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Navigation from "@/components/Navigation";
import Search from "@/lib/ui/components/Search";

import { useUsers } from "@/service/users";
import { useProducts, useWishlist } from "@/service";

import ImageWishlist from "@/images/icons/wishlist.svg";
import ImageCart from "@/images/icons/cart.svg";
import ImageUser from "@/images/icons/user.svg";
import DropUser from "@/images/icons/user-dropd.svg";
import DropOrder from "@/images/icons/order.svg";
import DropCancallations from "@/images/icons/cancallations-dropd.svg";
import DropReviews from "@/images/icons/reviews-dropd.svg";
import DropLogout from "@/images/icons/logout-dropd.svg";

import styles from "./Header.module.css";

const Header: React.FC = () => {
	const [dropdownVisible, setDropdownVisible] = useState(false);

	const [, currentUser, { logoutUser }] = useUsers();

	const handleMouseEnter = () => {
		if (currentUser) {
			setDropdownVisible(true);
		}
	};

	const handleMouseLeave = () => {
		setDropdownVisible(false);
	};

	const handleLogout = () => {
		logoutUser();
	};

import { TProduct } from "@/types";

export const Header: React.FC = () => {
	const [wishlist] = useWishlist();
	const [products] = useProducts({ ids: wishlist });

	return (
		<div className="container-wrapper">
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					marginTop: 40
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "100%",
						paddingBottom: 16,
						borderBottom: "0.5px solid var(--border)"
					}}
				>
					<Link href="/">
						<h1
							className={fontInter.className}
							style={{
								fontSize: 24,
								fontWeight: 800,
								letterSpacing: "0.03em",
								lineHeight: "24px"
							}}
						>
							Exclusive
						</h1>
					</Link>
					<Navigation />
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: 24
						}}
					>
						<Search
							placeholder="What are you looking for?"
							inputStyle={{ minWidth: 162 }}
						/>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 16
							}}
						>
							<Link
								href="/wishlist"
								style={{ display: "flex", position: "relative" }}
							>
								<Image src={ImageWishlist} alt="Wishlist" draggable={false} />
								{products && (products as TProduct[]).length > 0 && (
									<div
										style={{
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											position: "absolute",
											top: -2,
											right: 0,
											width: 17,
											borderRadius: "50%",
											backgroundColor: "var(--background-primary)",
											fontSize: 12,
											color: "#fff"
										}}
									>
										<span
											style={{
												marginLeft: -2
											}}
										>
											{(products as TProduct[]).length}
										</span>
									</div>
								)}
							</Link>
							<Link href="/cart" style={{ display: "flex" }}>
								<Image src={ImageCart} alt="Cart" draggable={false} />
							</Link>
							<div
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								style={{ position: "relative", display: "flex", cursor: "pointer" }}
							>
								<Link
									href={currentUser ? "#" : "/sign-up"}
									style={{ display: "flex" }}
								>
									<Image
										src={ImageUser}
										alt="User"
										draggable={false}
										className={currentUser ? styles.userIconActive : ""}
									/>
								</Link>
								{currentUser && dropdownVisible && (
									<div className={styles.userDropdown}>
										<ul>
											<li>
												<Link href="/manage-account">
													<span
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropUser}
															alt="Account Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														Account
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-orders">
													<span
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropOrder}
															alt="Account Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														My Orders
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-cancellations">
													<span
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropCancallations}
															alt="Account Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														My Cancellations
													</span>
												</Link>
											</li>
											<li>
												<Link href="/my-reviews">
													<span
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropReviews}
															alt="Account Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														My Reviews
													</span>
												</Link>
											</li>
											<li>
												<a onClick={handleLogout} className={styles.logout}>
													<span
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropLogout}
															alt="Account Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														Logout
													</span>
												</a>
											</li>
										</ul>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
