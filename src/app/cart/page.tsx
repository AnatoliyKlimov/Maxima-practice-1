import { Metadata } from "next";

import Breadcrumb from "@/client/components/Breadcrumb";
import { TableSection, TotalSection } from "@/client/sections/cart";

export const metadata: Metadata = {
	title: "Cart"
};

export default function CartPage() {
	return (
		<main
			style={{
				gap: 0
			}}
		>
			<Breadcrumb />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 80,
					margin: "80px 0 140px"
				}}
			>
				<TableSection />
				<TotalSection />
			</div>
		</main>
	);
}
