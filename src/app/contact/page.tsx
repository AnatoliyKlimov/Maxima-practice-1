"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import Breadcrumb from "@/components/Breadcrumb";
import { Button, TextArea, TextField } from "@/lib/ui/elements";

import callIcon from "@/images/icons/phone-contact.svg";
import mailIcon from "@/images/icons/mail-contact.svg";

import styles from "./contact.module.css";

export default function Contact() {
	const { t } = useTranslation();

	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 0
			}}
		>
			<Breadcrumb />
			<section
				style={{
					display: "flex",
					margin: "80px 0 140px"
				}}
			>
				<aside
					style={{
						borderRadius: 4,
						boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
						background: "rgb(255, 255, 255)",
						padding: "40px 35px",
						width: 340
					}}
				>
					<div className={styles.box}>
						<h3>
							<Image src={callIcon} alt="Call" />
							{t("contact.call")}
						</h3>
						<p
							style={{
								marginTop: 24
							}}
						>
							{t("contact.available")}
						</p>
						<p>{t("contact.phone")}: +88015-88888-9999</p>
						<span></span>
						<h3>
							<Image src={mailIcon} alt="Mail" />
							{t("contact.write")}
						</h3>
						<p
							style={{
								marginTop: 24
							}}
						>
							{t("contact.message")}
						</p>
						<p>
							Email:{" "}
							<a href="mailto:customer@exclusive.com">customer@exclusive.com</a>
						</p>
						<p>
							Email: <a href="mailto:support@exclusive.com">support@exclusive.com</a>
						</p>
					</div>
				</aside>
				<form className={styles.contactForm}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<TextField placeholder={t("contact.name")} className={styles.inputField} />
						<TextField
							type="email"
							placeholder={t("contact.email")}
							className={styles.inputField}
						/>
						<TextField
							type="tel"
							pattern="\+[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}"
							placeholder={t("contact.phones")}
							className={styles.inputField}
						/>
					</div>
					<TextArea
						placeholder={t("contact.mess")}
						className={styles.textArea}
					></TextArea>
					<Button type="primary" submit style={{ height: 59 }}>
						{t("contact.send")}
					</Button>
				</form>
			</section>
		</main>
	);
}
