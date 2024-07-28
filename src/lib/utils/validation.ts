import * as Yup from "yup";

const phoneRegex =
	/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export function phoneNumber(this: Yup.StringSchema, errorMessage: string) {
	return this.test(`test-phone-number`, errorMessage, function (value) {
		const { path, createError } = this;

		return (value && phoneRegex.test(value)) || createError({ path, message: errorMessage });
	});
}

export function emailOrPhoneNumber(this: Yup.StringSchema, errorMessage: string) {
	return this.test(`test-phone-number`, errorMessage, function (value) {
		const { path, createError } = this;

		return (
			(value && (phoneRegex.test(value) || emailRegex.test(value))) ||
			createError({ path, message: errorMessage })
		);
	});
}

export const isRequiredField = (validationSchema: Yup.ObjectSchema<any>, fieldName: string) => {
	const schemaDescription = validationSchema.describe();
	const field = schemaDescription.fields[fieldName];

	return !!(field && "optional" in field && field.optional === false);
};
