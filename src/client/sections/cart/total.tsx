"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Button, TextField } from "@/lib/ui/elements";
import { useCart, useProducts } from "@/service";

import { TProduct } from "@/types";

export const TotalSection: React.FC = () => {
	const { t } = useTranslation();

	const [cart] = useCart();
	const [products] = useProducts({ ids: cart.map((product) => product.id) });

	const cartProducts = (products as TProduct[]).map((product, index) => ({
		...product,
		quantity: cart[index].quantity
	}));

	return (
		<section style={{ display: "flex", justifyContent: "space-between" }}>
			<div style={{ display: "flex", alignItems: "flex-start", gap: 16, width: 527 }}>
				<TextField
					as="secondary"
					placeholder={t("total.coupon")}
					style={{
						padding: "16px 24px"
					}}
				/>
				<Button type="primary">{t("total.apply")}</Button>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 24,
					width: 470,
					padding: "32px 24px",
					border: "2px solid #000",
					borderRadius: 4
				}}
			>
				<h3
					style={{
						alignSelf: "flex-start",
						fontSize: 20,
						fontWeight: 500,
						lineHeight: "28px"
					}}
				>
					{t("total.cart")}
				</h3>
				<ul
					style={{
						display: "flex",
						flexDirection: "column",
						alignSelf: "stretch",
						gap: 1,
						backgroundColor: "var(--border)"
					}}
				>
					<li
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "15px 0",
							backgroundColor: "#fff"
						}}
					>
						<span>{t("total.subtotal")}</span>
						<span>
							$
							{cartProducts.reduce(
								(acc, product) => acc + product.price * product.quantity,
								0
							)}
						</span>
					</li>
					<li
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "15px 0",
							backgroundColor: "#fff"
						}}
					>
						<span>{t("total.discount")}</span>
						<span>
							$
							{cartProducts.reduce(
								(acc, product) =>
									product.priceOld
										? acc +
										(product.priceOld - product.price) * product.quantity
										: acc,
								0
							)}
						</span>
					</li>
					<li
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "15px 0",
							backgroundColor: "#fff"
						}}
					>
						<span>{t("total.shipping")}</span>
						<span>{t("total.free")}</span>
					</li>
					<li
						style={{
							display: "flex",
							justifyContent: "space-between",
							padding: "15px 0",
							backgroundColor: "#fff"
						}}
					>
						<span>{t("total.tot")}</span>
						<span>
							$
							{cartProducts.reduce(
								(acc, product) => acc + product.price * product.quantity,
								0
							)}
						</span>
					</li>
				</ul>
				<Button as={Link} href="/order">{t("total.process")}</Button>
			</div>
		</section>
	);
};
