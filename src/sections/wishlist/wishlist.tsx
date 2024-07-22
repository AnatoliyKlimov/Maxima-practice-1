"use client";

import { Caption, Card } from "@/lib/ui/components";
import { Button } from "@/lib/ui/elements";
import { useProducts, useWishlist } from "@/service";
import { useTranslation } from "react-i18next";

import { TProduct, TWishlistProduct } from "@/types";
import i18next from "i18next";

export const WishlistSection: React.FC = () => {
	const { t } = useTranslation();
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
					text={`${t("wishlist.wish")} (${(products as TProduct[]).length})`}
					textStyle={{
						color: "var(--foreground)",
						fontSize: 20,
						lineHeight: "26px"
					}}
					bordered={false}
				/>
				<Button type="secondary">
					<span style={{ fontWeight: 500 }}>{t("wishlist.add")}</span>
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
