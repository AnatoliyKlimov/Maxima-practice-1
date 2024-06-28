"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Navigation.module.css";

export const Navigation: React.FC = () => {
	const pathname = "/" + usePathname().split("/")[1];

	return (
		<ul
			style={{
				display: "inline-flex",
				gap: 48,
				listStyle: "none"
			}}
		>
			<li
				className={`${styles.navMenuItem} ${
					pathname == "/" ? styles.navMenuItemActive : ""
				}`}
			>
				<Link href="/">Home</Link>
			</li>
			<li
				className={`${styles.navMenuItem} ${
					pathname == "/contact" ? styles.navMenuItemActive : ""
				}`}
			>
				<Link href="/contact">Contact</Link>
			</li>
			<li
				className={`${styles.navMenuItem} ${
					pathname == "/about" ? styles.navMenuItemActive : ""
				}`}
			>
				<Link href="/about">About</Link>
			</li>
			<li
				className={`${styles.navMenuItem} ${
					pathname == "/sign-up" ? styles.navMenuItemActive : ""
				}`}
			>
				<Link href="/sign-up">Sign Up</Link>
			</li>
		</ul>
	);
};

export default Navigation;
