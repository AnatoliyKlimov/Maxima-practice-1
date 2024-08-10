import type { Metadata } from "next";

import { OrdersSection } from "@/admin/sections";

export const metadata: Metadata = {
	title: "Order management"
};

export default function OrdersPage() {
	return <OrdersSection />;
}
