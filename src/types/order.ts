import { ArrayElement } from "@/lib/utils";

import { TCart, TProduct } from "@/types";

type TOrderProducts = (TProduct & { quantity: number })[];

export type TOrderStatus =
	| "pending"
	| "confirmed"
	| "processing"
	| "picked"
	| "shipped"
	| "delivered"
	| "cancelled";

export type TBillingDetails = {
	firstName: string;
	companyName?: string;
	streetAddress: string;
	apartment?: string;
	city: string;
	phone: string;
	email: string;
};

export type TOrder = {
	id: number;
	products: TCart;
	productsParsed: TOrderProducts;
	paymentMethod: "bank" | "cash";
	billingDetails: TBillingDetails;
	status: TOrderStatus;
	createdAt: string;
};

export type TCreateOrderDTO = Omit<TOrder, "id">;
export type TUpdateOrderDTO = Partial<TOrder>;
export type TDeleteOrderDTO = Pick<TOrder, "id">;

export type TOrderExtended = Pick<TOrder, "id" | "createdAt" | "status"> & {
	customer: TOrder["billingDetails"]["firstName"];
	subtotal: number;
	shipping: number;
	discount: number;
	total: number;
	profit: number;
	products: (ArrayElement<TOrder["productsParsed"]> & {
		key: string;
		discount: number;
		total: number;
	})[];
};

export type TOrderProduct = ArrayElement<TOrderExtended["products"]>;
