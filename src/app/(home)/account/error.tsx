"use client";

import { useTranslation } from "react-i18next";

import Button from "@/lib/ui/elements/Button";

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
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
					fontWeight: 500,
					fontSize: 110,
					lineHeight: "115px",
					marginTop: 140,
					marginBottom: 80
				}}
			>
				{error.message}
			</h2>
			<Button onClick={() => reset()} style={{ marginBottom: 140 }}>
				{t("errors.forbidden.action")}
			</Button>
		</div>
	);
}
