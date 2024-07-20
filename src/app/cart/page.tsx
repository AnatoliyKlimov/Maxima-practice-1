import Breadcrumb from "@/components/Breadcrumb";
import { TableSection, TotalSection } from "@/sections/cart";

export default function CartPage() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
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
