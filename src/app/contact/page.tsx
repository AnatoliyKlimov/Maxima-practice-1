import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
	return (
		<div className={styles.contactContainer}>
			<header />
			<div className={styles.contactContent}>
				<h2>Contact</h2>
				<div className={styles.contactInfo}>
					<div className={styles.box}>
						<h3>Call To Us</h3>
						<p>We are available 24/7, 7 days a week.</p>
						<p>Phone: +88015-88888-9999</p>
					</div>
					<div className={styles.box}>
						<h3>Write To Us</h3>
						<p>Email: <a href="mailto:contact@exclusive.com">contact@exclusive.com</a></p>
						<p>We'll respond within 24 hours</p>
					</div>
				</div>
				<form className={styles.contactForm}>
					<input type="text" placeholder="Your Name" className={styles.inputField} />
					<input type="email" placeholder="Your Email" className={styles.inputField} />
					<input type="text" placeholder="Your Phone" className={styles.inputField} />
					<textarea placeholder="Your Message" className={styles.textArea}></textarea>
					<button type="submit" className={styles.submitButton}>Send Message</button>
				</form>
			</div>
			<footer />
		</div>
	);
};

