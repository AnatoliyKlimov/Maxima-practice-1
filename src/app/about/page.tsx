import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Slider from "@/components/Slider";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { ServiceSection } from "@/sections";

import portraitAfr from "@/images/portrait-two-african.png";
import shopMistic from "@/images/icons/shop-mistic.svg";
import moneyMistic from "@/images/icons/money-mist.svg";
import giftMistic from "@/images/icons/gift-mist.svg";
import sliderTom from "@/images/Tom.png";
import sliderEmma from "@/images/Emma.png";
import sliderWill from "@/images/Will.png";
import iconTwit from "@/images/icons/Icon-about-Twitter.svg";
import iconInst from "@/images/icons/icon-about-instagram.svg";
import iconLn from "@/images/icons/Icon-about-Linkedin.svg";

import styles from "./About.module.css";

export default function About() {
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
						Our Story
					</h2>
					<p>
						Launced in 2015, Exclusive is South Asia’s premier online shopping
						makterplace with an active presense in Bangladesh. Supported by wide range
						of tailored marketing, data and service solutions, Exclusive has 10,500
						sallers and 300 brands and serves 3 millioons customers across the region.{" "}
					</p>
					<p
						style={{
							marginTop: 24
						}}
					>
						Exclusive has more than 1 Million products to offer, growing at a very fast.
						Exclusive offers a diverse assotment in categories ranging from consumer.
					</p>
				</div>
				<Image src={portraitAfr} width={570} alt="Two girl" />
			</article>
			<section
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "98px 0"
				}}
			>
				<div className={styles.box}>
					<Image src={shopMistic} alt="shop" />
					<span>10.5k </span>
					<span>Sallers active our site</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="dollar" />
					<span>33k </span>
					<span>Mopnthly Produduct Sale</span>
				</div>
				<div className={styles.box}>
					<Image src={giftMistic} alt="gift" />
					<span>45.5k </span>
					<span>Customer active in our site</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="money" />
					<span>25k </span>
					<span>Anual gross sale in our site</span>
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
											Tom Cruise
										</span>
										<span>Founder & Chairman</span>
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
											Emma Watson
										</span>
										<span>Managing Director</span>
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
											Will Smith
										</span>
										<span>Product Designer</span>
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
