"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import styles from "./Breadcrumb.module.css";

interface IBreadcrumbProps {
	isProductView?: string;
}

/** @public */
export const Breadcrumb: React.FC<IBreadcrumbProps> = ({ isProductView = false }) => {
	const { t } = useTranslation();

	const pathname = usePathname();
	const pathnames = pathname.split("/").filter((x) => x);

	return (
		<nav aria-label="breadcrumb">
			<ul className={styles.breadcrumb}>
				{pathnames.length > 0 ? (
					<li className={styles["breadcrumb-item"]}>
						<Link href="/">{t("navigation.home")} /</Link>
					</li>
				) : (
					<li className={`${styles["breadcrumb-item"]} ${styles.active}`}>
						{t("navigation.home")}
					</li>
				)}
				{!isProductView &&
					pathnames.map((name, index) => {
						const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
						const isLast = index === pathnames.length - 1;

						return isLast ? (
							<li
								key={name}
								className={`${styles["breadcrumb-item"]} ${styles.active}`}
								aria-current="page"
							>
								{t(`navigation.${name}`)}
							</li>
						) : (
							<li key={name} className={styles["breadcrumb-item"]}>
								<Link href={routeTo}>{t(`navigation.${name}`)}</Link>
							</li>
						);
					})}
				{isProductView && (
					<li
						key={"product-view-breadcrumb"}
						className={`${styles["breadcrumb-item"]} ${styles.active}`}
						aria-current="page"
					>
						{isProductView}
					</li>
				)}
			</ul>
		</nav>
	);
};

/** @alias */
export default Breadcrumb;
