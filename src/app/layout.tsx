import type { Metadata } from "next";

import { fontOpenSans } from "@/app/fonts";
import StoreProvider from "@/store/provider";
import TopHeader from "@/components/TopHeader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
			<body className={fontOpenSans.className}>
				<StoreProvider>
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
				</StoreProvider>
			</body>
		</html>
	);
}
