import Link from "next/link";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import { TBaseComponent } from "@/types";

import ImageArrow from "@/images/icons/drop-down.svg";

const menuItems: {
	key: string;
	text: React.ReactNode;
	url: string;
	arrow?: boolean;
}[] = [
	{
		key: uuid(),
		text: "Woman’s Fashion",
		url: "#",
		arrow: true
	},
	{
		key: uuid(),
		text: "Men’s Fashion",
		url: "#",
		arrow: true
	},
	{
		key: uuid(),
		text: "Electronics",
		url: "#"
	},
	{
		key: uuid(),
		text: "Home & Lifestyle",
		url: "#"
	},
	{
		key: uuid(),
		text: "Medicine",
		url: "#"
	},
	{
		key: uuid(),
		text: "Sports & Outdoor",
		url: "#"
	},
	{
		key: uuid(),
		text: "Baby's & Toys",
		url: "#"
	},
	{
		key: uuid(),
		text: "Groceries & Pets",
		url: "#"
	},
	{
		key: uuid(),
		text: "Health & Beauty",
		url: "#"
	}
];

type TCategoriesMenu = TBaseComponent<"ul">;

export const CategoriesMenu: React.FC<TCategoriesMenu> = ({ style, ...otherProps }) => {
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
						{item.arrow ? (
							<Image
								src={ImageArrow}
								alt=""
								style={{ transform: "rotate(-90deg)" }}
							/>
						) : null}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default CategoriesMenu;
