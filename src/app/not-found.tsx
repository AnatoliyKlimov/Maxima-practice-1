"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
	const { t } = useTranslation();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "48px 0"
			}}
		>
			<h2
				style={{
					fontWeight: "500",
					fontSize: "110px",
					lineHeight: "115px",
					marginTop: "140px"
				}}
			>
				404 {t("not-found.status")}
			</h2>

			<p
				style={{
					fontSize: "16px",
					lineHeight: "24px",
					padding: "40px 0 80px"
				}}
			>
				{t("not-found.description")}
			</p>
			<Link
				href="/"
				style={{
					borderRadius: "4px",
					background: "#db4444",
					color: "#fff",
					padding: "16px 48px",
					marginBottom: "140px"
				}}
			>
				{t("not-found.action")}
			</Link>
		</div>
	);
}
