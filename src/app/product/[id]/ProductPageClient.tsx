"use client";

import { notFound } from "next/navigation";
import { useProducts } from "@/service/products";
import { TProduct } from "@/types";
import Breadcrumb from "@/components/Breadcrumb";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { TodaysSection } from "@/sections/home";
import { JustForYouSection } from "@/sections/wishlist";

interface ProductPageClientProps {
	id: string;
}

const ProductPageClient = ({ id }: ProductPageClientProps) => {
	const [product, { addProduct, updateProduct, deleteProduct, clearProducts }] = useProducts({
		id
	});

	if (!product) {
		notFound();
	}

	//функция для рендера звезд
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
										borderRadius: 4
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
					<img
						src={product.image}
						alt={product.title}
						style={{
							width: "100%",
							height: "100%",
							borderRadius: 4,
							padding: "0 20px"
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
					<p>
						{renderStars(product.rating.value)} ({product.rating.reviewsCount} reviews)
					</p>
					<p>${product.price}</p>
					{product.priceOld && <p>Old Price: ${product.priceOld}</p>}
					<p>
						PlayStation 5 Controller Skin High quality vinyl with air channel adhesive
						for easy bubble free install & mess free removal Pressure sensitive.
					</p>
					{product.colors && (
						<div>
							<h2>Available Colors</h2>
							<ul>
								{product.colors.map((color, index) => (
									<li key={index} style={{ color: color.value }}>
										{color.name}
									</li>
								))}
							</ul>
						</div>
					)}
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
