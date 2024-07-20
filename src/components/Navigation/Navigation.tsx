"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";

const Navigation: React.FC = () => {
	const { t } = useTranslation();
	const pathname = "/" + usePathname().split("/")[1];

	const navItems = [
		{
			key: uuid(),
			text: t("navigation.home"),
			url: "/"
		},
		{
			key: uuid(),
			text: t("navigation.contact"),
			url: "/contact"
		},
		{
			key: uuid(),
			text: t("navigation.about"),
			url: "/about"
		},
		{
			key: uuid(),
			text: t("navigation.signup"),
			url: "/sign-up"
		}
	];

	return (
		<ul
			style={{
				display: "inline-flex",
				gap: 48
			}}
		>
			{navItems.map((item) => (
				<li
					key={item.key}
					style={{
						borderBottom: "1px solid transparent",
						borderBottomColor: pathname == item.url ? "#808080" : "transparent"
					}}
				>
					<Link href={item.url}>{item.text}</Link>
				</li>
			))}
		</ul>
	);
};

export default Navigation;
