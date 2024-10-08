"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import Button from "@/lib/ui/elements/Button";
import { Footer, Header, TopHeader } from "@/client/components";

import "./(home)/globals.css";

export default function NotFoundPage() {
	const { t } = useTranslation();

	return (
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
				<div className="container">
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
						<Button as={Link} href="/" style={{ marginBottom: 140 }}>
							{t("errors.notFound.action")}
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
