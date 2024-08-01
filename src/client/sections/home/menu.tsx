"use client";

import Image from "next/image";
import Link from "next/link";
import { Trans, useTranslation } from "react-i18next";

import { fontInter } from "@/app/fonts";
import { CategoriesMenu, Slider } from "@/client/components";

import ImageApple from "@/images/apple-logo.webp";
import ImageIphone from "@/images/iphone.webp";
import ImageArrow from "@/images/icons/arrow-left.svg";

export const MenuSection: React.FC = () => {
	const { t } = useTranslation();

	return (
		<section
			style={{
				display: "flex",
				alignItems: "stretch"
			}}
		>
			<CategoriesMenu />
			<div
				style={{
					width: 1,
					backgroundColor: "var(--border)",
					flexShrink: 0
				}}
			/>
			<Slider
				config={{
					arrows: false,
					speed: 600,
					autoplay: true,
					autoplaySpeed: 6000,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1
				}}
				slides={[
					{
						key: "slide-01",
						content: (
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									height: 344,
									backgroundColor: "#000",
									color: "#fff"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20,
										padding: "58px 0 22px 64px"
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: 24
										}}
									>
										<Image src={ImageApple} alt="Apple" draggable={false} />
										<span style={{ marginTop: 4 }}>{t("iphone.title")}</span>
									</div>
									<h1
										className={fontInter.className}
										style={{
											fontSize: 48,
											fontWeight: 600,
											lineHeight: "60px",
											letterSpacing: "0.04em"
										}}
									>
										<Trans i18nKey="iphone.voucher">
											Up to 10%
											<br />
											off Voucher
										</Trans>
									</h1>
									<Link
										href="#"
										style={{
											display: "flex",
											alignItems: "center"
										}}
									>
										<div
											style={{
												display: "flex",
												fontWeight: 500,
												lineHeight: "24px",
												paddingBottom: 2,
												borderBottom: "1px solid #fff"
											}}
										>
											{t("iphone.shop")}
										</div>
										<Image
											src={ImageArrow}
											alt=""
											draggable={false}
											style={{
												marginLeft: 11,
												marginTop: -4,
												transform: "rotate(180deg)",
												filter: "invert(100%)"
											}}
										/>
									</Link>
								</div>
								<Image
									src={ImageIphone}
									alt="iPhone"
									draggable={false}
									priority
									style={{ marginTop: 16 }}
								/>
							</div>
						)
					},
					{
						key: "slide-02",
						content: (
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									height: 344,
									backgroundColor: "#000",
									color: "#fff"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20,
										padding: "58px 0 22px 64px"
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: 24
										}}
									>
										<Image src={ImageApple} alt="Apple" draggable={false} />
										<span style={{ marginTop: 4 }}>{t("iphone.title")}</span>
									</div>
									<h1
										className={fontInter.className}
										style={{
											fontSize: 48,
											fontWeight: 600,
											lineHeight: "60px",
											letterSpacing: "0.04em"
										}}
									>
										<Trans i18nKey="iphone.voucher">
											Up to 10%
											<br />
											off Voucher
										</Trans>
									</h1>
									<Link
										href="#"
										style={{
											display: "flex",
											alignItems: "center"
										}}
									>
										<div
											style={{
												display: "flex",
												fontWeight: 500,
												lineHeight: "24px",
												paddingBottom: 2,
												borderBottom: "1px solid #fff"
											}}
										>
											{t("iphone.shop")}
										</div>
										<Image
											src={ImageArrow}
											alt=""
											draggable={false}
											style={{
												marginLeft: 11,
												marginTop: -4,
												transform: "rotate(180deg)",
												filter: "invert(100%)"
											}}
										/>
									</Link>
								</div>
								<Image
									src={ImageIphone}
									alt="iPhone"
									draggable={false}
									priority
									style={{ marginTop: 16 }}
								/>
							</div>
						)
					},
					{
						key: "slide-03",
						content: (
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									height: 344,
									backgroundColor: "#000",
									color: "#fff"
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
										gap: 20,
										padding: "58px 0 22px 64px"
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: 24
										}}
									>
										<Image src={ImageApple} alt="Apple" draggable={false} />
										<span style={{ marginTop: 4 }}>{t("iphone.title")}</span>
									</div>
									<h1
										className={fontInter.className}
										style={{
											fontSize: 48,
											fontWeight: 600,
											lineHeight: "60px",
											letterSpacing: "0.04em"
										}}
									>
										<Trans i18nKey="iphone.voucher">
											Up to 10%
											<br />
											off Voucher
										</Trans>
									</h1>
									<Link
										href="#"
										style={{
											display: "flex",
											alignItems: "center"
										}}
									>
										<div
											style={{
												display: "flex",
												fontWeight: 500,
												lineHeight: "24px",
												paddingBottom: 2,
												borderBottom: "1px solid #fff"
											}}
										>
											{t("iphone.shop")}
										</div>
										<Image
											src={ImageArrow}
											alt=""
											draggable={false}
											style={{
												marginLeft: 11,
												marginTop: -4,
												transform: "rotate(180deg)",
												filter: "invert(100%)"
											}}
										/>
									</Link>
								</div>
								<Image
									src={ImageIphone}
									alt="iPhone"
									draggable={false}
									priority
									style={{ marginTop: 16 }}
								/>
							</div>
						)
					}
				]}
				style={{
					padding: "40px 0 0 40px",
					width: "calc(1170px - 217px - 16px - 1px)"
				}}
			/>
		</section>
	);
};
