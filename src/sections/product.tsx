"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { fontInter } from "@/app/fonts";
import { RadioGroup, Button } from "@/lib/ui/elements";
import Breadcrumb from "@/components/Breadcrumb";
import { Colors, Rating } from "@/lib/ui/components";
import { JustForYouSection } from "@/sections/wishlist";

import { useProducts, useCart, useWishlist } from "@/service";

import { TProduct } from "@/types";

import ImageDelivery from "@/images/icons/iconDelivery.svg";
import ImageReturn from "@/images/icons/IconReturn.svg";
import ImageWishList from "@/images/icons/wishlist.svg";
import Minus from "@/images/icons/Minus.svg";
import Plus from "@/images/icons/Plus.svg";

interface IProductPageClientProps {
	id: string;
}

export const ProductSection = ({ id }: IProductPageClientProps) => {
	const [product, { addProduct, updateProduct, deleteProduct, clearProducts }] = useProducts({
		id
	});

	const [quantity, setQuantity] = useState(1);
	const [sizeValue, setSizeValue] = useState("M");

	const [, { addProduct: addWishlistProduct }] = useWishlist();
	const [, { addProduct: addCartProduct }] = useCart();

	const { t } = useTranslation();

	const handleSizeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSizeValue(e.target.value);
	};

	const handleDecreaseQuantity = () => {
		setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
	};

	const handleIncreaseQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	if (!product) {
		notFound();
	}

	return (
		<>
			<Breadcrumb isProductView={(product as TProduct).title} />

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "170px 500px 1fr",
					padding: "80px 0 140px"
				}}
			>
				<div>
					<figure
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16
						}}
					>
						{Array(4)
							.fill(null)
							.map((_, index) => (
								<Image
									key={index}
									src={(product as TProduct).image}
									alt={(product as TProduct).title}
									width={178}
									height={138}
									style={{
										background: "rgb(245, 245, 245)",
										borderRadius: 4,
										objectFit: "contain",
										padding: 20
									}}
								/>
							))}
					</figure>
				</div>
				<div
					style={{
						position: "relative",
						width: 500,
						height: 600,
						background: "rgb(245, 245, 245)",
						borderRadius: 4,
						marginLeft: 30
					}}
				>
					<Image
						src={(product as TProduct).image}
						alt={(product as TProduct).title}
						width={500}
						height={600}
						style={{
							width: "100%",
							height: "100%",
							borderRadius: 4,
							padding: "20px 20px",
							objectFit: "contain"
						}}
					/>
				</div>
				<div
					style={{
						marginLeft: 80,
						display: "flex",
						flexDirection: "column",
						gap: 16
					}}
				>
					<h2
						style={{
							fontSize: 24,
							fontWeight: 600
						}}
					>
						{(product as TProduct).title}
					</h2>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8
						}}
					>
						<Rating rating={product.rating} />
						<span
							style={{
								marginTop: -2
							}}
						>
							|
						</span>
						<span style={{ color: "green", marginLeft: 8 }}>
							{t("renderingProduct.stock")}
						</span>
					</p>
					<div
						className={fontInter.className}
						style={{ display: "flex", alignItems: "center", gap: 10 }}
					>
						<p style={{ fontSize: 24 }}>${(product as TProduct).price}</p>
						{(product as TProduct).priceOld && (
							<p
								style={{
									fontSize: 24,
									color: "var(--foreground-semi)",
									textDecoration: "line-through",
									WebkitTextDecoration: "line-through"
								}}
							>
								${(product as TProduct).priceOld}
							</p>
						)}
					</div>
					<p
						style={{
							margin: "8px 0 28px"
						}}
					>
						{t("renderingProduct.description")}
					</p>
					<div
						style={{
							borderTop: "1px solid #E0E0E0",
							marginBottom: 20,
							paddingBottom: 20
						}}
					>
						{product.colors && (
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 10,
									marginTop: 24
								}}
							>
								<p style={{ marginRight: 10 }}>{t("renderingProduct.colors")}</p>
								<Colors
									style={{
										marginTop: 4
									}}
									name={"productColors"}
									colors={(product as TProduct).colors}
								/>
							</div>
						)}

						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								margin: "24px 0"
							}}
						>
							<p style={{ marginRight: 10 }}>{t("renderingProduct.size")}</p>
							<RadioGroup
								inputStyle={{ display: "none" }}
								style={{ gap: 16 }}
								name={"sizeRadio"}
								options={["XS", "S", "M", "L", "XL"].map((size, index) => ({
									value: size,
									content: (
										<div
											key={index}
											style={{
												padding: "5px 10px",
												border:
													sizeValue === size
														? "1px solid rgb(219, 68, 68)"
														: "1px solid rgba(0, 0, 0, 0.5)",
												borderRadius: 4,
												background:
													sizeValue === size
														? "rgb(219, 68, 68)"
														: "none",
												color: sizeValue === size ? "white" : "inherit",
												cursor: "pointer",
												transition:
													"background 0.3s, border 0.3s, color 0.3s"
											}}
										>
											{size}
										</div>
									)
								}))}
								value={sizeValue}
								onChange={handleSizeSelection}
							/>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								marginTop: 20
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center"
								}}
							>
								<Button
									style={{
										padding: "20.5px 12px",
										border: "1px solid #E0E0E0",
										borderRadius: "4px 0px 0px 4px",
										background: "none",
										color: "inherit",
										cursor: "pointer",
										transition: "background 0.3s, color 0.3s"
									}}
									onClick={handleDecreaseQuantity}
								>
									<Image src={Minus} alt="Minus" />
								</Button>
								<span
									style={{
										fontSize: 20,
										fontWeight: 500,
										textAlign: "center",
										borderBottom: "1px solid #E0E0E0",
										borderTop: "1px solid #E0E0E0",
										padding: "8px 34px"
									}}
								>
									{quantity}
								</span>
								<Button
									style={{
										padding: "9.5px 8px",
										border: "1px solid #E0E0E0",
										borderRadius: "0px 4px 4px 0px",
										background: "none",
										color: "inherit",
										cursor: "pointer",
										transition: "background 0.3s, color 0.3s"
									}}
									onClick={handleIncreaseQuantity}
								>
									<Image
										src={Plus}
										alt="Plus"
										style={{ filter: "invert(100%)" }}
									/>
								</Button>
							</div>

							<Button
								style={{
									height: 44,
									width: 165,
									display: "flex",
									alignItems: "center"
								}}
								onClick={() => addCartProduct({ id: (product as TProduct).id })}
							>
								{t("renderingProduct.buy")}
							</Button>
							<Button
								style={{
									padding: 5,
									border: "1px solid #E0E0E0",
									borderRadius: 4,
									background: "none",
									color: "inherit",
									cursor: "pointer"
								}}
								onClick={() => addWishlistProduct((product as TProduct).id)}
							>
								<Image src={ImageWishList} alt="WishList" />
							</Button>
						</div>
					</div>
					<div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								border: "1px solid rgba(0, 0, 0, 0.5)",
								padding: "16px 0 16px 16px"
							}}
						>
							<Image src={ImageDelivery} alt="Free Delivery" width={30} height={30} />
							<div>
								<p style={{ margin: 0 }}>{t("renderingProduct.delivery")}</p>
								<p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
									{t("renderingProduct.deliveryDescription")}
								</p>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								border: "1px solid rgba(0, 0, 0, 0.5)",
								padding: "24px 0 16px 16px"
							}}
						>
							<Image src={ImageReturn} alt="Return Delivery" width={30} height={30} />
							<div>
								<p style={{ margin: 0 }}>{t("renderingProduct.return")}</p>
								<p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
									{t("renderingProduct.returnDetails")}{" "}
									<a href="#">{t("renderingProduct.returnLink")}</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					paddingBottom: 140
				}}
			>
				<JustForYouSection />
			</div>
		</>
	);
};

export default ProductSection;
