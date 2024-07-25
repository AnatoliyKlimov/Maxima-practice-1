"use client";

import { notFound } from "next/navigation";
import { useProducts } from "@/service/products";
import { TProduct } from "@/types";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";
import Button from "@/lib/ui/elements/Button";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TodaysSection } from "@/sections/home";
import { JustForYouSection } from "@/sections/wishlist";

import Image from "next/image";
import ImageDelivery from "@/images/icons/iconDelivery.svg";
import ImageReturn from "@/images/icons/IconReturn.svg";
import ImageWishList from "@/images/icons/wishlist.svg";
import Minus from "@/images/icons/Minus.svg";
import Plus from "@/images/icons/Plus.svg";

interface ProductPageClientProps {
	id: string;
}

const ProductPageClient = ({ id }: ProductPageClientProps) => {
	const [product, { addProduct, updateProduct, deleteProduct, clearProducts }] = useProducts({
		id
	});

	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState<string | null>(null);

	if (!product) {
		notFound();
	}

	// функция для рендера звезд
	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= 0.5;
		const emptyStars = 5 - Math.ceil(rating);
		const starColor = "#FFAD33";

		return (
			<>
				{Array(fullStars)
					.fill(null)
					.map((_, index) => (
						<FaStar key={`full-${index}`} color={starColor} />
					))}
				{hasHalfStar && <FaStarHalfAlt key="half" color={starColor} />}
				{Array(emptyStars)
					.fill(null)
					.map((_, index) => (
						<FaRegStar key={`empty-${index}`} color={starColor} />
					))}
			</>
		);
	};

	const handleQuantityChange = (increment: boolean) => {
		setQuantity((prev) => (increment ? prev + 1 : prev - 1 > 0 ? prev - 1 : 1));
	};

	const handleSizeSelection = (size: string) => {
		setSelectedSize(size);
	};

	const handleBuyNow = () => {
		if (product) {
			addProduct({ ...product, quantity, size: selectedSize });
		}
	};

	return (
		<>
			<Breadcrumb />

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
								<img
									key={index}
									src={product.image}
									alt={product.title}
									style={{
										width: 170,
										height: 138,
										background: "rgb(245, 245, 245)",
										borderRadius: 4,
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
						height: 600, // Изменено на 600
						background: "rgb(245, 245, 245)",
						borderRadius: 4,
						marginLeft: 30
					}}
				>
					<img
						src={product.image}
						alt={product.title}
						style={{
							width: "100%",
							height: "100%",
							borderRadius: 4,
							padding: "20px 20px"
						}}
					/>
				</div>
				<div
					style={{
						marginLeft: 80
					}}
				>
					<h2
						style={{
							fontSize: 24,
							fontWeight: 600
						}}
					>
						{product.title}
					</h2>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							gap: 8
						}}
					>
						{renderStars(product.rating.value)}
						<span style={{ opacity: 0.6 }}>
							({product.rating.reviewsCount} Reviews)
						</span>
						<span style={{ color: "green", marginLeft: 8 }}>In Stock</span>
					</p>
					<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
						<p style={{ color: "red", fontWeight: "bold", fontSize: "24px" }}>
							${product.price}
						</p>
						{product.priceOld && (
							<p
								style={{
									color: "var(--foreground-semi)",
									textDecoration: "line-through",
									WebkitTextDecoration: "line-through"
								}}
							>
								${product.priceOld}
							</p>
						)}
					</div>
					<p>
						PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
						for easy bubble free install & mess free removal Pressure sensitive.
					</p>
					<div
						style={{
							borderTop: "1px solid #E0E0E0",
							marginBottom: 20,
							paddingBottom: 20
						}}
					>
						<div style={{ display: "flex", alignItems: "center", gap: 10 }}>
							<p style={{ marginRight: 10 }}>Colours:</p>
							{product.colors &&
								product.colors.map((color, index) => (
									<div
										key={index}
										style={{
											width: 20,
											height: 20,
											backgroundColor: color.value,
											borderRadius: "50%",
											border: "1px solid #E0E0E0"
										}}
									></div>
								))}
						</div>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 10,
								margin: "24px 0"
							}}
						>
							<p style={{ marginRight: 10 }}>Size:</p>
							{["XS", "S", "M", "L", "XL"].map((size, index) => (
								<Button
									key={index}
									style={{
										padding: "5px 10px",
										border:
											selectedSize === size
												? "1px solid rgb(219, 68, 68)"
												: "1px solid rgba(0, 0, 0, 0.5)",
										borderRadius: 4,
										background:
											selectedSize === size ? "rgb(219, 68, 68)" : "none",
										color: selectedSize === size ? "white" : "inherit",
										cursor: "pointer",
										transition: "background 0.3s, border 0.3s, color 0.3s"
									}}
									onClick={() => handleSizeSelection(size)}
								>
									{size}
								</Button>
							))}
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
									onClick={() => handleQuantityChange(false)}
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
									onClick={() => handleQuantityChange(true)}
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
							>
								Buy Now
							</Button>
							<Button
								style={{
									padding: "10px",
									border: "1px solid #E0E0E0",
									borderRadius: 4,
									background: "none",
									color: "inherit",
									cursor: "pointer"
								}}
								onClick={() => {
									/* добавить в понравившиеся */
								}}
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
							<Image
								src={ImageDelivery}
								alt="Free Delivery"
								style={{ width: 30, height: 30 }}
							/>
							<div>
								<p style={{ margin: 0 }}>Free Delivery</p>
								<p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
									Enter your postal code for Delivery Availability
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
							<Image
								src={ImageReturn}
								alt="Return Delivery"
								style={{ width: 30, height: 30 }}
							/>
							<div>
								<p style={{ margin: 0 }}>Return Delivery</p>
								<p style={{ margin: 0, fontSize: "12px", color: "grey" }}>
									Free 30 Days Delivery Returns. <a href="#">Details</a>
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

export default ProductPageClient;
