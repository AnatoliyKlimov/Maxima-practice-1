"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./Breadcrumb.module.css";

const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumb: React.FC = () => {
	const pathname = usePathname();
	const pathnames = pathname.split("/").filter((x) => x);

	return (
		<nav aria-label="breadcrumb">
			<ol className={styles.breadcrumb}>
				{pathnames.length > 0 ? (
					<li className={styles["breadcrumb-item"]}>
						<Link href="/">Home /</Link>
					</li>
				) : (
					<li className={`${styles["breadcrumb-item"]} ${styles.active}`}>Home</li>
				)}
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
					const isLast = index === pathnames.length - 1;

					return isLast ? (
						<li
							key={name}
							className={`${styles["breadcrumb-item"]} ${styles.active}`}
							aria-current="page"
						>
							{capitalizeFirstLetter(name)}
						</li>
					) : (
						<li key={name} className={styles["breadcrumb-item"]}>
							<Link href={routeTo}>{capitalizeFirstLetter(name)}</Link>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
