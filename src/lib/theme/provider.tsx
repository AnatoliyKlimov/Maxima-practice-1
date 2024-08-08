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
					colorText: "var(--foreground)"
				},
				components: {
					Table: {
						headerBg: "#fff"
					},
					Select: {
						optionSelectedColor: "inherit",
						optionSelectedFontWeight: 500
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
