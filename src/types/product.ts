import { CSSProperties } from "react";

import { TRating, TColors } from "@/types";

type TProductType = "todays" | "this-month" | "our-products";

export type TProduct = {
	id: string;
	title: string;
	type?: TProductType;
	image: string;
	imageFit?: CSSProperties["objectFit"];
	price: number;
	priceOld?: number;
	isNew?: boolean;
	discountPercent?: number;
	rating?: TRating;
	colors?: TColors;
	createdAt?: string;
};

export type TAddProductDTO = Omit<TProduct, "id">;
export type TUpdateProductDTO = Partial<TProduct>;
export type TDeleteProductDTO = Pick<TProduct, "id">;
