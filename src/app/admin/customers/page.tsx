import type { Metadata } from "next";

import { CustomersSection } from "@/admin/sections";

export const metadata: Metadata = {
	title: "Customer management"
};

export default function CustomersPage() {
	return <CustomersSection />;
}
