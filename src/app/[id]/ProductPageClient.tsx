"use client";

import { notFound } from "next/navigation";
import { useProducts } from "@/service/products";
import { TProduct } from "@/types";

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
		<div>
			<h1>{product.title}</h1>
			<img src={product.image} alt={product.title} />
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
	);
};

export default ProductPageClient;
