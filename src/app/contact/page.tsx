import styles from "./Contact.module.css";

import callIcon from "@/images/icons/phone-contact.svg";
import mailIcon from "@/images/icons/mail-contact.svg";
import Image from "next/image";

export default function Contact() {
	return (
		<main className={styles.contactContainer}>
			<section style={{
				display: "flex",
				margin: "80px 0 140px"
			}}>
				<aside style={{
					borderRadius: 4,
					boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)",
					background: "rgb(255, 255, 255)",
					padding: "40px 35px",
					width: 340
				}}>
					<div className={styles.box}>
						<h3>
							<Image src={callIcon} alt="Call" />
							Call To Us</h3>
						<p style={{
							marginTop: 24
						}}>We are available 24/7, 7 days a week.</p>
						<p>Phone: +88015-88888-9999</p>
						<span></span>
						<h3>
							<Image src={mailIcon} alt="Mail" />
							Write To Us</h3>
						<p style={{
							marginTop: 24
						}}>Fill out our form and we will contact you within 24 hours.</p>
						<p>Email: <a
							href="mailto:customer@exclusive.com">customer@exclusive.com</a></p>
						<p>Email: <a
							href="mailto:support@exclusive.com">support@exclusive.com</a></p>
					</div>
				</aside>
				<form className={styles.contactForm}>
					<input type="text" placeholder="Your Name*" className={styles.inputField} />
					<input type="email" placeholder="Your Email*" className={styles.inputField} />
					<input type="text" placeholder="Your Phone*" className={styles.inputField} />
					<textarea placeholder="Your Message" className={styles.textArea}></textarea>
					<button type="submit" className={styles.submitButton}>Send Message</button>
				</form>
			</section>
		</main>
	);
};

