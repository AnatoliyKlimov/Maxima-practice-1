import { v4 as uuid } from "uuid";

import { TProduct } from "@/types";

export const DefaultTodaysProducts: TProduct[] = [
	{
		id: uuid(),
		title: "HAVIT HV-G92 Gamepad",
		image: "/images/products/havit-hv-g92-gamepad.png",
		price: 120,
		priceOld: 160,
		discountPercent: 40,
		rating: {
			value: 5,
			reviewsCount: 88
		}
	},
	{
		id: uuid(),
		title: "AK-900 Wired Keyboard",
		image: "/images/products/ak-900-wired-keyboard.png",
		price: 960,
		priceOld: 1160,
		discountPercent: 35,
		rating: {
			value: 4,
			reviewsCount: 75
		}
	},
	{
		id: uuid(),
		title: "IPS LCD Gaming Monitor",
		image: "/images/products/ips-lcd-gaming-monitor.png",
		price: 370,
		priceOld: 400,
		discountPercent: 30,
		rating: {
			value: 5,
			reviewsCount: 99
		}
	},
	{
		id: uuid(),
		title: "S-Series Comfort Chair ",
		image: "/images/products/s-series-comfort-chair.png",
		price: 375,
		priceOld: 400,
		discountPercent: 25,
		rating: {
			value: 4.5,
			reviewsCount: 99
		}
	}
];
