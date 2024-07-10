import { CSSProperties } from "react";

import { TRating, TColors } from "@/types";

export type TProduct = {
	id: string;
	title: string;
	image: string;
	imageFit?: CSSProperties["objectFit"];
	price: number;
	priceOld?: number;
	isNew?: boolean;
	discountPercent?: number;
	rating: TRating;
	colors?: TColors;
};
