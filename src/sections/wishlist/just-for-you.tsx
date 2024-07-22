"use client";

import { useTranslation } from "react-i18next";
import { Caption, Card } from "@/lib/ui/components";
import { Button } from "@/lib/ui/elements";
import { useProducts, useRecommendations } from "@/service";

import { TProduct } from "@/types";

export const JustForYouSection: React.FC = () => {
	const { t } = useTranslation();
	const [recommendations] = useRecommendations();
	const [products] = useProducts({ ids: recommendations });

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
					text={t("wishlist.for")}
					textStyle={{
						color: "var(--foreground)",
						fontSize: 20,
						lineHeight: "26px"
					}}
					bordered={false}
				/>
				<Button type="secondary">
					<span style={{ fontWeight: 500 }}>{t("wishlist.see")}</span>
				</Button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				{(products as TProduct[]).map((product) => (
					<Card
						product={product}
						buttons={["wishlist", "view"]}
						key={`recommend-product-${product.id}`}
					/>
				))}
			</div>
		</section>
	);
};
