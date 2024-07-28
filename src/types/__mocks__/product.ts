import { TProduct } from "@/types";

export const defaultTodaysProducts: TProduct[] = [
	{
		id: "1",
		title: "HAVIT HV-G92 Gamepad",
		type: "todays",
		image: "/images/products/havit-hv-g92-gamepad.webp",
		price: 120,
		priceOld: 160,
		discountPercent: 40,
		rating: {
			value: 5,
			reviewsCount: 88
		}
	},
	{
		id: "2",
		title: "AK-900 Wired Keyboard",
		type: "todays",
		image: "/images/products/ak-900-wired-keyboard.webp",
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
		id: "3",
		title: "IPS LCD Gaming Monitor",
		type: "todays",
		image: "/images/products/ips-lcd-gaming-monitor.webp",
		price: 370,
		priceOld: 400,
		discountPercent: 30,
		rating: {
			value: 5,
			reviewsCount: 99
		}
	},
	{
		id: "4",
		title: "S-Series Comfort Chair ",
		type: "todays",
		image: "/images/products/s-series-comfort-chair.webp",
		price: 375,
		priceOld: 400,
		discountPercent: 25,
		rating: {
			value: 4.5,
			reviewsCount: 99
		}
	}
];

export const defaultThisMonthProducts: TProduct[] = [
	{
		id: "5",
		title: "The North Coat",
		type: "this-month",
		image: "/images/products/the-north-coat.webp",
		price: 260,
		priceOld: 360,
		rating: {
			value: 5,
			reviewsCount: 65
		}
	},
	{
		id: "6",
		title: "Gucci Duffle Bag",
		type: "this-month",
		image: "/images/products/gucci-duffle-bag.webp",
		price: 960,
		priceOld: 1160,
		rating: {
			value: 4.5,
			reviewsCount: 65
		}
	},
	{
		id: "7",
		title: "RGB Liquid CPU Cooler",
		type: "this-month",
		image: "/images/products/rgb-liquid-cpu-cooler.webp",
		imageFit: "cover",
		price: 160,
		priceOld: 170,
		rating: {
			value: 4.5,
			reviewsCount: 65
		}
	},
	{
		id: "8",
		title: "Small BookSelf",
		type: "this-month",
		image: "/images/products/small-book-self.webp",
		imageFit: "cover",
		price: 360,
		rating: {
			value: 5,
			reviewsCount: 65
		}
	}
];

export const defaultOurProducts: TProduct[] = [
	{
		id: "9",
		title: "Breed Dry Dog Food",
		type: "our-products",
		image: "/images/products/breed-dry-dog-food.webp",
		price: 100,
		rating: {
			value: 3,
			reviewsCount: 35
		}
	},
	{
		id: "10",
		title: "CANON EOS DSLR Camera",
		type: "our-products",
		image: "/images/products/canon-eos-dslr-camera.webp",
		price: 360,
		rating: {
			value: 4,
			reviewsCount: 95
		}
	},
	{
		id: "11",
		title: "ASUS FHD Gaming Laptop",
		type: "our-products",
		image: "/images/products/asus-fhd-gaming-laptop.webp",
		imageFit: "cover",
		price: 700,
		rating: {
			value: 5,
			reviewsCount: 325
		}
	},
	{
		id: "12",
		title: "Curology Product Set",
		type: "our-products",
		image: "/images/products/curology-product-set.webp",
		imageFit: "cover",
		price: 500,
		rating: {
			value: 4,
			reviewsCount: 145
		}
	},
	{
		id: "13",
		title: "Kids Electric Car",
		type: "our-products",
		image: "/images/products/kids-electric-car.webp",
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
		id: "14",
		title: "Jr. Zoom Soccer Cleats",
		type: "our-products",
		image: "/images/products/jr-zoom-soccer-cleats.webp",
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
		id: "15",
		title: "GP11 Shooter USB Gamepad",
		type: "our-products",
		image: "/images/products/gp11-shooter-usb-gamepad.webp",
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
		id: "16",
		title: "Quilted Satin Jacket",
		type: "our-products",
		image: "/images/products/quilted-satin-jacket.webp",
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

export const defaultProducts = [
	...defaultTodaysProducts,
	...defaultThisMonthProducts,
	...defaultOurProducts
];
