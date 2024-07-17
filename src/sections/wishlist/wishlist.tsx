"use client";

import { Caption, Card } from "@/lib/ui/components";
import { Button } from "@/lib/ui/elements";
import { useProducts, useWishlist } from "@/service";

import { TProduct, TWishlistProduct } from "@/types";

export const WishlistSection: React.FC = () => {
	const [wishlist] = useWishlist();
	const [products] = useProducts({ ids: wishlist });

	const wishlistProducts: TWishlistProduct[] = (products as TProduct[]).map((product) => {
		const { rating: _, ...productWithoutRating } = product;

		return { ...productWithoutRating };
	});

	return (
		<section>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					marginBottom: 60
				}}
			>
				<Caption
					text={`Wishlist (${(products as TProduct[]).length})`}
					textStyle={{
						color: "var(--foreground)",
						fontSize: 20,
						lineHeight: "26px"
					}}
					bordered={false}
				/>
				<Button type="secondary">
					<span style={{ fontWeight: 500 }}>Add All To Cart</span>
				</Button>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 270px)",
					justifyContent: "space-between",
					rowGap: 32
				}}
			>
				{wishlistProducts.map((product) => (
					<Card
						product={product}
						buttons={["delete"]}
						key={`wishlist-product-${product.id}`}
					/>
				))}
			</div>
		</section>
	);
};
