"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Navigation from "@/components/Navigation";
import Search from "@/lib/ui/components/Search";

import { useWishlist, useCart, useUsers } from "@/service";

import ImageWishlist from "@/images/icons/wishlist.svg";
import ImageCart from "@/images/icons/cart.svg";
import ImageUser from "@/images/icons/user.svg";
import DropUser from "@/images/icons/user-dropd.svg";
import DropOrder from "@/images/icons/order.svg";
import DropCancallations from "@/images/icons/cancallations-dropd.svg";
import DropReviews from "@/images/icons/reviews-dropd.svg";
import DropLogout from "@/images/icons/logout-dropd.svg";

import styles from "./Header.module.css";

export const Header: React.FC = () => {
	const { t } = useTranslation();

	const [wishlist] = useWishlist();
	const [cart] = useCart();

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
							placeholder={t("navigation.search")}
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
								style={{
									display: "flex",
									height: 32,
									width: 32,
									position: "relative"
								}}
							>
								<Image src={ImageWishlist} alt="Wishlist" draggable={false} />
								{wishlist && wishlist.length > 0 && (
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
										<span>{wishlist.length}</span>
									</div>
								)}
							</Link>
							<Link
								href="/cart"
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									height: 32,
									width: 32,
									position: "relative"
								}}
							>
								<Image src={ImageCart} alt="Cart" draggable={false} />
								{cart && cart.length > 0 && (
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
										<span>{cart.length}</span>
									</div>
								)}
							</Link>
							<div
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
								style={{ position: "relative", display: "flex", cursor: "pointer" }}
							>
								<Link
									href={currentUser ? "#" : "/sign-up"}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										height: 32,
										width: 32
									}}
									className={currentUser ? styles.userIconActive : ""}
								>
									<Image src={ImageUser} alt="User" draggable={false} />
								</Link>
								{currentUser && dropdownVisible && (
									<div className={styles.userDropdown}>
										<ul>
											<li>
												<Link href="/manage-account">
													<div
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
														{t("header.account")}
													</div>
												</Link>
											</li>
											<li>
												<Link href="/my-orders">
													<div
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropOrder}
															alt="Order Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														{t("header.myOrders")}
													</div>
												</Link>
											</li>
											<li>
												<Link href="/my-cancellations">
													<div
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropCancallations}
															alt="Cancellations Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														{t("header.myCancellations")}
													</div>
												</Link>
											</li>
											<li>
												<Link href="/my-reviews">
													<div
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropReviews}
															alt="Reviews Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														{t("header.myReviews")}
													</div>
												</Link>
											</li>
											<li>
												<a
													onClick={() => logoutUser()}
													className={styles.logout}
												>
													<div
														style={{
															display: "flex",
															alignItems: "center",
															fontWeight: "400",
															fontSize: 14
														}}
													>
														<Image
															src={DropLogout}
															alt="Logout Icon"
															width={32}
															height={32}
															style={{ marginRight: 16 }}
														/>
														{t("header.logout")}
													</div>
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
