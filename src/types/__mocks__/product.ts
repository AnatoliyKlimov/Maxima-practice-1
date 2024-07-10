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
		imageFit: "cover",
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

export const DefaultThisMonthProducts: TProduct[] = [
	{
		id: uuid(),
		title: "The North Coat",
		image: "/images/products/the-north-coat.png",
		price: 260,
		priceOld: 360,
		rating: {
			value: 5,
			reviewsCount: 65
		}
	},
	{
		id: uuid(),
		title: "Gucci Duffle Bag",
		image: "/images/products/gucci-duffle-bag.png",
		price: 960,
		priceOld: 1160,
		rating: {
			value: 4.5,
			reviewsCount: 65
		}
	},
	{
		id: uuid(),
		title: "RGB Liquid CPU Cooler",
		image: "/images/products/rgb-liquid-cpu-cooler.png",
		imageFit: "cover",
		price: 160,
		priceOld: 170,
		rating: {
			value: 4.5,
			reviewsCount: 65
		}
	},
	{
		id: uuid(),
		title: "Small BookSelf",
		image: "/images/products/small-book-self.png",
		imageFit: "cover",
		price: 360,
		rating: {
			value: 5,
			reviewsCount: 65
		}
	}
];

export const DefaultOurProducts: TProduct[] = [
	{
		id: uuid(),
		title: "Breed Dry Dog Food",
		image: "/images/products/breed-dry-dog-food.jpg",
		price: 100,
		rating: {
			value: 3,
			reviewsCount: 35
		}
	},
	{
		id: uuid(),
		title: "CANON EOS DSLR Camera",
		image: "/images/products/canon-eos-dslr-camera.png",
		price: 360,
		rating: {
			value: 4,
			reviewsCount: 95
		}
	},
	{
		id: uuid(),
		title: "ASUS FHD Gaming Laptop",
		image: "/images/products/asus-fhd-gaming-laptop.png",
		imageFit: "cover",
		price: 700,
		rating: {
			value: 5,
			reviewsCount: 325
		}
	},
	{
		id: uuid(),
		title: "Curology Product Set",
		image: "/images/products/curology-product-set.png",
		imageFit: "cover",
		price: 500,
		rating: {
			value: 4,
			reviewsCount: 145
		}
	},
	{
		id: uuid(),
		title: "Kids Electric Car",
		image: "/images/products/kids-electric-car.png",
		price: 960,
		isNew: true,
		rating: {
			value: 5,
			reviewsCount: 65
		},
		colors: [
			{
				name: "Red",
				value: "#FB1314"
			},
			{
				name: "Other",
				value: "#DB4444"
			}
		]
	},
	{
		id: uuid(),
		title: "Jr. Zoom Soccer Cleats",
		image: "/images/products/jr-zoom-soccer-cleats.png",
		imageFit: "cover",
		price: 1160,
		rating: {
			value: 5,
			reviewsCount: 35
		},
		colors: [
			{
				name: "Yellow",
				value: "#EEFF61"
			},
			{
				name: "Other",
				value: "#DB4444"
			}
		]
	},
	{
		id: uuid(),
		title: "GP11 Shooter USB Gamepad",
		image: "/images/products/gp11-shooter-usb-gamepad.png",
		imageFit: "cover",
		price: 660,
		isNew: true,
		rating: {
			value: 4.5,
			reviewsCount: 55
		},
		colors: [
			{
				name: "Black",
				value: "#000000"
			},
			{
				name: "Other",
				value: "#DB4444"
			}
		]
	},
	{
		id: uuid(),
		title: "Quilted Satin Jacket",
		image: "/images/products/quilted-satin-jacket.png",
		imageFit: "cover",
		price: 660,
		rating: {
			value: 4.5,
			reviewsCount: 55
		},
		colors: [
			{
				name: "Dark Green",
				value: "#184A48"
			},
			{
				name: "Other",
				value: "#DB4444"
			}
		]
	}
];
