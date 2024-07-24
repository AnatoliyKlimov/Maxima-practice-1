import Breadcrumb from "@/components/Breadcrumb";
import { OrderSection } from "@/sections/order";

export default function CheckoutPage() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 0
			}}
		>
			<Breadcrumb />
			<OrderSection />
		</main>
	);
}
