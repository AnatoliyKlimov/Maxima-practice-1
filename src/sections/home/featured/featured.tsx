"use client";

import Image from "next/image";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

import { fontInter } from "@/app/fonts";
import Caption from "@/lib/ui/components/Caption";

import ImagePlayStation5 from "@/images/playstation-5.png";
import ImageWoman from "@/images/woman.jpg";
import ImageSpeakers from "@/images/speakers.png";
import ImagePerfume from "@/images/perfume.png";

import styles from "./featured.module.css";

export const FeaturedSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text={t("featured.title")} style={{ marginBottom: 24 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 60
				}}
			>
				<div>
					<h1
						className={fontInter.className}
						style={{
							display: "inline",
							fontSize: 36,
							fontWeight: 600,
							lineHeight: "48px",
							letterSpacing: "0.04em"
						}}
					>
						{t("featured.new")}
					</h1>
				</div>
			</div>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(3, 270px)",
					gridTemplateRows: "repeat(2, 285px)",
					gridTemplateAreas: `
						"playstation playstation women women"
						"playstation playstation speakers perfume"
					`,
					gap: 30
				}}
			>
				<div className={styles.featuredBlock} style={{ gridArea: "playstation" }}>
					<Image
						src={ImagePlayStation5}
						alt="Playstation 5"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 40,
							height: 540,
							width: 511,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							PlayStation 5
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							<Trans i18nKey="featured.ps5Desc">
								Black and White version of the PS5
								<br /> coming out on sale.
							</Trans>
						</p>
						<Link href="#">{t("featured.shop")}</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "women" }}>
					<Image
						src={ImageWoman}
						alt="Woman"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 0,
							height: "100%",
							width: "auto",
							objectFit: "cover",
							transform: "scale(-1, 1)"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							{t("featured.woman")}
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							<Trans i18nKey="featured.womanC">
								Featured woman collections that <br />
								give you another vibe.
							</Trans>
						</p>
						<Link href="#">{t("featured.shop")}</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "speakers" }}>
					<div
						style={{
							position: "absolute",
							inset: 0,
							filter: "blur(100px)",
							background: "rgba(217, 217, 217, 0.35)"
						}}
					></div>
					<Image
						src={ImageSpeakers}
						alt="Speakers"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 0,
							right: 0,
							height: 260,
							width: 260,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							{t("featured.speakers")}
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							{t("featured.speakersD")}
						</p>
						<Link href="#">{t("featured.shop")}</Link>
					</div>
				</div>
				<div className={styles.featuredBlock} style={{ gridArea: "perfume" }}>
					<div
						style={{
							position: "absolute",
							inset: 0,
							filter: "blur(100px)",
							background: "rgba(217, 217, 217, 0.35)"
						}}
					></div>
					<Image
						src={ImagePerfume}
						alt="Perfume"
						draggable={false}
						style={{
							position: "absolute",
							bottom: 10,
							right: 10,
							height: 250,
							width: 240,
							objectFit: "cover"
						}}
					/>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 16,
							zIndex: 1
						}}
					>
						<h2
							className={fontInter.className}
							style={{
								fontWeight: 600,
								letterSpacing: "0.03em"
							}}
						>
							{t("featured.perfume")}
						</h2>
						<p
							style={{
								fontSize: 14,
								lineHeight: "21px"
							}}
						>
							{t("featured.intense")}
						</p>
						<Link href="#">{t("featured.shop")}</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
