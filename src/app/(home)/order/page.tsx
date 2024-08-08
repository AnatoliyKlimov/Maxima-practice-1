import { Metadata } from "next";

import Breadcrumb from "@/client/components/Breadcrumb";
import OrderSection from "@/client/sections/order";

export const metadata: Metadata = {
	title: "Checkout"
};

export default function CheckoutPage() {
	return (
		<main
			style={{
				gap: 0
			}}
		>
			<Breadcrumb />
			<OrderSection />
		</main>
	);
}
