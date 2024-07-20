"use client";

import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import { TBaseComponent } from "@/types";

import ImageArrow from "@/images/icons/drop-down.svg";

type TCategoriesMenu = TBaseComponent<"ul">;

export const CategoriesMenu: React.FC<TCategoriesMenu> = ({ style, ...otherProps }) => {
	const { t } = useTranslation();

	// Массив menuItems перемещен внутрь компонента для использования функции перевода
	const menuItems = [
		{
			key: "fashion-women",
			text: t("categories.woman"),
			url: "#",
			arrow: true
		},
		{
			key: "fashion-men",
			text: t("categories.men"),
			url: "#",
			arrow: true
		},
		{
			key: "electronics",
			text: t("categories.electronics"),
			url: "#"
		},
		{
			key: "home-lifestyle",
			text: t("categories.home"),
			url: "#"
		},
		{
			key: "medicine",
			text: t("categories.medicine"),
			url: "#"
		},
		{
			key: "sports-outdoor",
			text: t("categories.sports"),
			url: "#"
		},
		{
			key: "baby-toys",
			text: t("categories.baby"),
			url: "#"
		},
		{
			key: "groceries-pets",
			text: t("categories.groceries"),
			url: "#"
		},
		{
			key: "health-beauty",
			text: t("categories.health"),
			url: "#"
		}
	];

	return (
		<ul
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 16,
				width: 217,
				marginTop: 40,
				marginRight: 16.25,
				lineHeight: "24px",
				...style
			}}
			{...otherProps}
		>
			{menuItems.map((item) => (
				<li key={item.key}>
					<Link
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%"
						}}
						href={item.url}
					>
						{item.text}
						{item.arrow && (
							<Image
								src={ImageArrow}
								alt=""
								style={{ transform: "rotate(-90deg)" }}
							/>
						)}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default CategoriesMenu;
