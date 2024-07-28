import { StringSchema } from "yup";

declare module "yup" {
	interface StringSchema {
		phoneNumber(errorMessage: string): StringSchema;
		emailOrPhoneNumber(errorMessage: string): StringSchema;
	}
}
