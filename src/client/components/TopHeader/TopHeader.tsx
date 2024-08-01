"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import Select from "@/lib/ui/elements/Select";
import i18n from "@/lib/utils/i18n";

/** @public */
export const TopHeader: React.FC = () => {
	const { t } = useTranslation();

	const handleLanguageChange = (language: string) => {
		i18n.changeLanguage(language);
	};

	return (
		<div className="container-wrapper" style={{ background: "#000" }}>
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "center",
					position: "relative",
					padding: "12px 0",
					fontSize: 14,
					lineHeight: "24px",
					color: "#fff"
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 8
					}}
				>
					<span>{t("welcomeMessage")}</span>
					<Link
						href="#"
						style={{
							fontWeight: 600,
							lineHeight: "24px",
							textDecoration: "underline"
						}}
					>
						{t("buy")}
					</Link>
				</div>
				<div
					style={{
						display: "inline-flex",
						position: "absolute",
						right: 0
					}}
				>
					<Select
						options={[
							{
								key: "lang-select-eng",
								text: "English",
								value: "en"
							},
							{
								key: "lang-select-rus",
								text: "Русский",
								value: "ru"
							}
						]}
						defaultValue={i18n.resolvedLanguage}
						onChange={(e) => handleLanguageChange(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

/** @alias */
export default TopHeader;
