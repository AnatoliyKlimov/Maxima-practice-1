import type { Metadata } from "next";

import { DashboardSection } from "@/admin/sections";

export const metadata: Metadata = {
	title: "Dashboard"
};

export default function AdminDashboardPage() {
	return <DashboardSection />;
}
