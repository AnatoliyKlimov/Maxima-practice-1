"use client";

import { Caption, Card } from "@/lib/ui/components";
import { Button } from "@/lib/ui/elements";
import { useProducts, useRecommendations } from "@/service";

import { TProduct } from "@/types";

export const JustForYouSection: React.FC = () => {
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
					text="Just For You"
					textStyle={{
						color: "var(--foreground)",
						fontSize: 20,
						lineHeight: "26px"
					}}
					bordered={false}
				/>
				<Button type="secondary">
					<span style={{ fontWeight: 500 }}>See All</span>
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
