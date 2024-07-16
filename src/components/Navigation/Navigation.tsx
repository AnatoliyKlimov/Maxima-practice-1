"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { v4 as uuid } from "uuid";

const navItems: {
	key: string;
	text: React.ReactNode;
	url: string;
}[] = [
	{
		key: uuid(),
		text: "Home",
		url: "/"
	},
	{
		key: uuid(),
		text: "Contact",
		url: "/contact"
	},
	{
		key: uuid(),
		text: "About",
		url: "/about"
	},
	{
		key: uuid(),
		text: "Sign Up",
		url: "/sign-up"
	}
];

export const Navigation: React.FC = () => {
	const pathname = "/" + usePathname().split("/")[1];

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
