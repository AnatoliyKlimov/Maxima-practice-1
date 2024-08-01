"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

import { fontInter } from "@/app/fonts";
import { Breadcrumb, Slider } from "@/components";
import { ServiceSection } from "@/sections";

import portraitAfr from "@/images/portrait-two-african.webp";
import shopMistic from "@/images/icons/shop-mistic.svg";
import moneyMistic from "@/images/icons/money-mist.svg";
import giftMistic from "@/images/icons/gift-mist.svg";
import sliderTom from "@/images/Tom.webp";
import sliderEmma from "@/images/Emma.webp";
import sliderWill from "@/images/Will.webp";
import iconTwit from "@/images/icons/Icon-about-Twitter.svg";
import iconInst from "@/images/icons/icon-about-instagram.svg";
import iconLn from "@/images/icons/Icon-about-Linkedin.svg";

import styles from "./about.module.css";

export default function About() {
	const { t } = useTranslation();

	return (
		<main
			style={{
				marginBottom: 140,
				gap: 42
			}}
		>
			<Breadcrumb />
			<article
				style={{
					display: "flex",
					alignItems: "center",
					gap: 75
				}}
			>
				<div
					style={{
						width: 525
					}}
				>
					<h2
						className={fontInter.className}
						style={{
							fontSize: 54,
							fontWeight: 600,
							marginBottom: 40
						}}
					>
						{t("about.story")}
					</h2>
					<p>{t("about.launced")}</p>
					<p
						style={{
							marginTop: 24
						}}
					>
						{t("about.has")}
					</p>
				</div>
				<Image src={portraitAfr} width={570} alt="Two girl" />
			</article>
			<section
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "98px 0",
					gap: 18
				}}
			>
				<div className={styles.box}>
					<Image src={shopMistic} alt="shop" />
					<span>10.5k </span>
					<span
						style={{
							textAlign: "center"
						}}
					>
						{t("about.sellers")}
					</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="dollar" />
					<span>33k </span>
					<span
						style={{
							textAlign: "center"
						}}
					>
						{t("about.product")}
					</span>
				</div>
				<div className={styles.box}>
					<Image src={giftMistic} alt="gift" />
					<span>45.5k </span>
					<span
						style={{
							textAlign: "center"
						}}
					>
						{t("about.customer")}
					</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="money" />
					<span>25k </span>
					<span
						style={{
							textAlign: "center"
						}}
					>
						{t("about.annual")}
					</span>
				</div>
			</section>

			<Slider
				config={{
					arrows: false,
					speed: 600,
					autoplay: true,
					autoplaySpeed: 6000,
					dots: true,
					slidesToShow: 3,
					slidesToScroll: 1
				}}
				slides={[
					{
						key: "slider-01",
						content: (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center"
										}}
									>
										<Image src={sliderTom} alt="Tom" draggable={false} />
										<span
											style={{ marginTop: 24, fontSize: 32, fontWeight: 500 }}
										>
											{t("about.slider.name_one")}
										</span>
										<span>{t("about.slider.profession_one")}</span>
										<span
											style={{
												display: "flex",
												gap: 16,
												padding: "16px 0 60px"
											}}
										>
											<a href="#">
												<Image src={iconTwit} alt="Twitter" />
											</a>

											<a href="#">
												<Image src={iconInst} alt="Instagram" />
											</a>

											<a href="#">
												<Image src={iconLn} alt="Link" />
											</a>
										</span>
									</div>
								</div>
							</div>
						)
					},
					{
						key: "slider-02",
						content: (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center"
										}}
									>
										<Image src={sliderEmma} alt="Emma" draggable={false} />
										<span
											style={{ marginTop: 24, fontSize: 32, fontWeight: 500 }}
										>
											{t("about.slider.name_two")}
										</span>
										<span>{t("about.slider.profession_two")}</span>
										<span
											style={{
												display: "flex",
												gap: 16,
												padding: "16px 0 60px"
											}}
										>
											<a href="#">
												<Image src={iconTwit} alt="Twitter" />
											</a>

											<a href="#">
												<Image src={iconInst} alt="Instagram" />
											</a>

											<a href="#">
												<Image src={iconLn} alt="Link" />
											</a>
										</span>
									</div>
								</div>
							</div>
						)
					},
					{
						key: "slider-03",
						content: (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20
									}}
								>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											alignItems: "center"
										}}
									>
										<Image src={sliderWill} alt="Will" draggable={false} />
										<span
											style={{ marginTop: 24, fontSize: 32, fontWeight: 500 }}
										>
											{t("about.slider.name_three")}
										</span>
										<span>{t("about.slider.profession_three")}</span>
										<span
											style={{
												display: "flex",
												gap: 16,
												padding: "16px 0 60px"
											}}
										>
											<a href="#">
												<Image src={iconTwit} alt="Twitter" />
											</a>

											<a href="#">
												<Image src={iconInst} alt="Instagram" />
											</a>

											<a href="#">
												<Image src={iconLn} alt="Link" />
											</a>
										</span>
									</div>
								</div>
							</div>
						)
					}
				]}
				style={{
					paddingBottom: 100,
					width: 1170
				}}
			/>

			<ServiceSection />
		</main>
	);
}
