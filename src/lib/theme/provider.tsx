"use client";

import { ConfigProvider } from "antd";

import { TBaseComponent } from "@/types";

/** @public */
export const AntdThemeProvider: React.FC<TBaseComponent> = ({ children }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "inherit",
					fontSize: 15,
					colorText: "var(--foreground)",
					colorPrimary: "#0f60ff"
				},
				components: {
					Table: {
						headerBg: "#fff"
					},
					Select: {
						optionSelectedColor: "inherit",
						optionSelectedFontWeight: 500
					},
					Pagination: {
						itemBg: "#f1f2f6",
						itemActiveBg: "var(--foreground-active)",
						itemLinkBg: "#f1f2f6"
					}
				}
			}}
		>
			{children}
		</ConfigProvider>
	);
};

/** @alias */
export default AntdThemeProvider;
