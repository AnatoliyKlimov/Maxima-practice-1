import Link from "next/link";
import Image from "next/image";

import { fontInter } from "@/app/fonts";
import Subscribe from "@/lib/ui/components/Subscribe";

import ImageQRCode from "@/images/qr-code.jpg";
import ImageGooglePlay from "@/images/google-play.png";
import ImageAppStore from "@/images/app-store.png";
import IconFacebook from "@/images/social/facebook.svg";
import IconTwitter from "@/images/social/twitter.svg";
import IconInstagram from "@/images/social/instagram.svg";
import IconLinkedin from "@/images/social/linkedin.svg";

import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
	return (
		<div
			className="container-wrapper"
			style={{ flexDirection: "column", backgroundColor: "#000" }}
		>
			<div
				className="container-wrapper"
				style={{
					paddingTop: 80,
					paddingBottom: 60,
					borderBottom: "1px solid #141414"
				}}
			>
				<div
					className="container"
					style={{
						display: "flex",
						justifyContent: "center"
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							justifyContent: "space-between",
							width: "100%"
						}}
					>
						<div className={styles.footerList}>
							<Link href="/">
								<h1
									className={fontInter.className}
									style={{
										fontSize: 24,
										fontWeight: 800,
										letterSpacing: "0.03em",
										lineHeight: "24px"
									}}
								>
									Exclusive
								</h1>
							</Link>
							<div className={styles.footerList}>
								<h4>Subscribe</h4>
								<ul>
									<li>Get 10% off your first order</li>
									<li>
										<Subscribe
											placeholder="Enter your email"
											iconStyle={{
												filter: "invert(100%)"
											}}
										/>
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.footerList}>
							<h4>Support</h4>
							<ul>
								<li>
									111 Bijoy sarani, Dhaka, <br />
									DH 1515, Bangladesh.
								</li>
								<li>
									<a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
								</li>
								<li>
									<a href="tel:+88015-88888-9999">+88015-88888-9999</a>
								</li>
							</ul>
						</div>
						<div className={styles.footerList}>
							<h4>Account</h4>
							<ul>
								<li>
									<Link href="/cabinet">My Account</Link>
								</li>
								<li>
									<Link href="/sign-in">Login / Register</Link>
								</li>
								<li>
									<Link href="/cart">Cart</Link>
								</li>
								<li>
									<Link href="/wishlist">Wishlist</Link>
								</li>
								<li>
									<Link href="/shop">Shop</Link>
								</li>
							</ul>
						</div>
						<div className={styles.footerList}>
							<h4>Quick Link</h4>
							<ul>
								<li>
									<Link href="/policy">Privacy Policy</Link>
								</li>
								<li>
									<Link href="/terms">Terms Of Use</Link>
								</li>
								<li>
									<Link href="/faq">FAQ</Link>
								</li>
								<li>
									<Link href="/contact">Contact</Link>
								</li>
							</ul>
						</div>
						<div className={styles.footerList}>
							<h4>Download App</h4>
							<div>
								<p
									style={{
										marginBottom: 10,
										opacity: 0.7,
										fontSize: 12,
										lineHeight: "18px",
										color: "#FAFAFA"
									}}
								>
									Save $3 with App New User Only
								</p>
								<div
									style={{
										display: "flex",
										gap: 13
									}}
								>
									<Image
										src={ImageQRCode}
										alt="QR Code"
										style={{ cursor: "pointer" }}
									/>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
											justifyContent: "space-between"
										}}
									>
										<Link href="#" style={{ display: "flex" }}>
											<Image
												src={ImageGooglePlay}
												alt="Download on Google Play"
											/>
										</Link>
										<Link href="#" style={{ display: "flex" }}>
											<Image
												src={ImageAppStore}
												alt="Download on App Store"
											/>
										</Link>
									</div>
								</div>
							</div>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: 24
								}}
							>
								<Link href="#" style={{ display: "flex" }}>
									<Image src={IconFacebook} alt="Facebook" />
								</Link>
								<Link href="#" style={{ display: "flex" }}>
									<Image src={IconTwitter} alt="Twitter" />
								</Link>
								<Link href="#" style={{ display: "flex" }}>
									<Image src={IconInstagram} alt="Instagram" />
								</Link>
								<Link href="#" style={{ display: "flex" }}>
									<Image src={IconLinkedin} alt="Linkedin" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-wrapper">
				<div
					className="container-wrapper"
					style={{
						paddingTop: 16,
						paddingBottom: 24,
						color: "#fff",
						opacity: 0.2,
						fontWeight: 400,
						lineHeight: "24px"
					}}
				>
					<span style={{ fontSize: 26 }}>©&nbsp;</span> Copyright Rimel 2022. All right
					reserved
				</div>
			</div>
		</div>
	);
};

export default Footer;
