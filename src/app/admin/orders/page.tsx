import type { Metadata } from "next";

import { OrdersSection } from "@/admin/sections/orders";

export const metadata: Metadata = {
	title: "Order management"
};

export default function OrdersPage() {
	return <OrdersSection />;
}
