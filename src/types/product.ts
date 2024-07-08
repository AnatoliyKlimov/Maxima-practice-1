import { TRating, TColors } from "@/types";

export type TProduct = {
	id: string;
	title: string;
	image: string;
	price: number;
	priceOld?: number;
	discountPercent?: number;
	rating: TRating;
	colors?: TColors;
};
