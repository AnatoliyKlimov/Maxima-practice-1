import type { Metadata } from "next";

import { UsersSection } from "@/admin/sections";

export const metadata: Metadata = {
	title: "User management"
};

export default function CustomersPage() {
	return <UsersSection />;
}
