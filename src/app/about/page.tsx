import {fontInter} from '@/app/fonts'

import styles from './About.module.css';
import Image from "next/image";
import portraitAfr from "@/images/portrait-two-african.png";
import shopMistic from "@/images/icons/shop-mistic.svg";
import moneyMistic from "@/images/icons/money-mist.svg";
import giftMistic from "@/images/icons/gift-mist.svg";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {ServiceSection} from "@/sections";

export default function About() {
	return (
		<main style={{
			marginBottom: 140,
			gap: 42
		}}>
			<Breadcrumb/>
			<article style={{
				display: "flex",
				alignItems: "center",
				gap: 75
			}}>
				<div style={{
					width: 525,
				}}>
					<h2 className={fontInter.className} style={{
						fontSize: 54,
						fontWeight: 600,
						marginBottom: 40,
					}}>Our Story</h2>
					<p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
						presense in Bangladesh. Supported by wide range of tailored marketing, data and service
						solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
						the region. </p>
					<p style={{
						marginTop: 24,
					}}>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
						diverse assotment in categories ranging from consumer.</p>
				</div>
				<Image src={portraitAfr} width={570} alt="Two girl"/>
			</article>
			<section style={{
				display: "flex",
				justifyContent: "space-between",
				padding: "98px 0"
			}} >
				<div className={styles.box}>
					<Image src={shopMistic} alt="shop"/>
					<span>10.5k </span>
					<span>Sallers active our site</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="dollar"/>
					<span>33k </span>
					<span>Mopnthly Produduct Sale</span>
				</div>
				<div className={styles.box}>
					<Image src={giftMistic} alt="gift"/>
					<span>45.5k </span>
					<span>Customer active in our site</span>
				</div>
				<div className={styles.box}>
					<Image src={moneyMistic} alt="money"/>
					<span>25k </span>
					<span>Anual gross sale in our site</span>
				</div>
			</section>
			<ServiceSection />
		</main>
	);
};
