"use client";

import { useTranslation } from "react-i18next";
import { Flex, Button } from "antd";

export default function NotFoundPage() {
	const { t } = useTranslation();

	return (
		<Flex
			vertical
			align="center"
			justify="center"
			style={{
				justifyContent: "center",
				padding: "48px 0"
			}}
		>
			<h2
				style={{
					fontWeight: 500,
					fontSize: 110,
					lineHeight: "115px",
					marginTop: 140
				}}
			>
				404 {t("errors.notFound.status")}
			</h2>
			<p
				style={{
					lineHeight: "24px",
					padding: "40px 0 80px"
				}}
			>
				{t("errors.notFound.description")}
			</p>
			<Button href="/admin">
				{t("errors.notFound.action")}
			</Button>
		</Flex>
	);
}
