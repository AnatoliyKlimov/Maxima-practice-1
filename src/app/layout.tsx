import type { Metadata } from "next";

import { fontOpenSans } from "@/app/fonts";
import StoreProvider from "@/store/provider";

export const metadata: Metadata = {
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
				<StoreProvider>{children}</StoreProvider>
			</body>
		</html>
	);
}
