import type { Metadata } from "next";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Flex, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";

import { fontInter, fontPublicSans } from "@/app/fonts";
import { Navigation, Header } from "@/admin/components";
import AntdThemeProvider from "@/lib/theme";

import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "Admin",
		template: "%s - Exclusive Admin"
	},
	description: "Exclusive Shop Admin"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AntdRegistry>
			<AntdThemeProvider>
				<Flex justify="center" className={`${fontPublicSans.className} admin-layout`}>
					<Layout
						style={{
							flexDirection: "row",
							gap: 28,
							maxWidth: 1440,
							minHeight: "100vh",
							backgroundColor: "var(--background)"
						}}
					>
						<Sider width={260} style={{ backgroundColor: "#fff" }}>
							<h1
								className={fontInter.className}
								style={{
									padding: "22px 18px",
									fontSize: 24,
									fontWeight: 700,
									lineHeight: "24px",
									letterSpacing: "0.03em"
								}}
							>
								Exclusive
							</h1>
							<Navigation />
						</Sider>
						<Layout style={{ paddingRight: 20, backgroundColor: "var(--background)" }}>
							<Header />
							<Content style={{ paddingBottom: 48 }}>{children}</Content>
						</Layout>
					</Layout>
				</Flex>
			</AntdThemeProvider>
		</AntdRegistry>
	);
}
