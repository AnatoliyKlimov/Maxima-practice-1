import type { Metadata } from "next";

import { fontPoppins } from "@/app/fonts";

import "./globals.css";

export const metadata: Metadata = {
	title: "Exclusive",
	description: "Exclusive Shop"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontPoppins.className}>{children}</body>
		</html>
	);
}
