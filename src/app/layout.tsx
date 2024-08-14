import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { fontOpenSans } from "@/app/fonts";
import StoreProvider from "@/store/provider";

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:300"),
	title: {
		default: "Exclusive",
		template: "%s - Exclusive"
	},
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
					<NextTopLoader color="#0f60ff" />
					{children}
				</StoreProvider>
			</body>
		</html>
	);
}
