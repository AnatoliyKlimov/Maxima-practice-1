"use client";

import { notFound } from "next/navigation";
import { useProducts } from "@/service/products";
import { TProduct } from "@/types";
import Breadcrumb from "@/components/Breadcrumb";

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
							objectFit: "cover",
							borderRadius: 4
						}}
					/>
				</div>
				<div
					style={{
						marginLeft: 80
					}}
				>
					<h2>{product.title}</h2>
					<p>Price: ${product.price}</p>
					{product.priceOld && <p>Old Price: ${product.priceOld}</p>}
					<p>Discount: {product.discountPercent}%</p>
					<p>
						Rating: {product.rating.value} ({product.rating.reviewsCount} reviews)
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
		</>
	);
};

export default ProductPageClient;
