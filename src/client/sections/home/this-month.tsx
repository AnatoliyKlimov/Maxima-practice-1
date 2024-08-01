"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { fontInter } from "@/app/fonts";
import Caption from "@/lib/ui/components/Caption";
import Button from "@/lib/ui/elements/Button";
import Card from "@/lib/ui/components/Card";

import { useProducts } from "@/service/products";

import { TProduct } from "@/types";

export const ThisMonthProductsSection: React.FC = () => {
	const { t } = useTranslation();

	const [thisMonthProducts] = useProducts({ type: "this-month" });

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text={t("month.title")} style={{ marginBottom: 24 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					position: "relative",
					marginBottom: 60
				}}
			>
				<h1
					className={fontInter.className}
					style={{
						display: "inline",
						fontSize: 36,
						fontWeight: 600,
						lineHeight: "48px",
						letterSpacing: "0.04em"
					}}
				>
					{t("month.description")}
				</h1>
				<Button
					type="primary"
					as={Link}
					href="/products"
					style={{
						position: "absolute",
						bottom: -2,
						right: 0
					}}
				>
					{t("month.view")}
				</Button>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				{(thisMonthProducts as TProduct[]).map((product) => (
					<Card
						product={product}
						buttons={["wishlist", "view"]}
						key={`this-month-product-${product.id}`}
					/>
				))}
			</div>
		</section>
	);
};
