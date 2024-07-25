import { TCart } from "@/types";

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
	products: TCart;
	paymentMethod: "bank" | "cash";
	billingDetails: TBillingDetails;
};
