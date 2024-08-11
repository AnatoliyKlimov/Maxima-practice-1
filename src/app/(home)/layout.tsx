import type { Metadata } from "next";

import { TopHeader, Header, Footer } from "@/client/components";

import "./globals.css";

export const metadata: Metadata = {
	title: "Home"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				minHeight: "100vh",
				overflow: "auto"
			}}
		>
			<TopHeader />
			<Header />
			<div className="container-wrapper" style={{ flexGrow: 1 }}>
				<div className="container">{children}</div>
			</div>
			<Footer />
		</div>
	);
}
