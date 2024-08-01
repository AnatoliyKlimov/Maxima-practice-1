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
					fontSize: 16
				},
				components: {
					Layout: {
						headerBg: "#fff"
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
