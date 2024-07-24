"use client";

import { FormikProps } from "formik";
import { ObjectSchema } from "yup";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { RadioGroup, TextField } from "@/lib/ui/elements";
import { isRequiredField } from "@/lib/utils/validation";

import { TOrder } from "@/types";

import ImagePayment from "@/images/payment.png";

export type TFormValues = Omit<TOrder, "products">;

interface IPaymentFormProps {
	formik: FormikProps<Omit<TOrder, "products">>;
}

interface IBillingFormProps {
	formik: FormikProps<Omit<TOrder, "products">>;
	validationSchema: ObjectSchema<any>;
}

export const PaymentForm: React.FC<IPaymentFormProps> = ({ formik }) => {
	const { t } = useTranslation();

	return (
		<RadioGroup
			name="paymentMethod"
			mode="vertical"
			value={formik.values.paymentMethod}
			onChange={formik.handleChange}
			onBlur={formik.handleBlur}
			options={[
				{
					content: (
						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between"
							}}
						>
							{t("checkout.paymentMethod.bank")}
							<Image src={ImagePayment} alt="Payment" draggable={false} />
						</div>
					),
					value: "bank"
				},
				{
					content: t("checkout.paymentMethod.cash"),
					value: "cash"
				}
			]}
			style={{ alignSelf: "stretch" }}
			labelStyle={{ width: "100%" }}
		/>
	);
};

export const BillingForm: React.FC<IBillingFormProps> = ({ formik, validationSchema }) => {
	const { t } = useTranslation();

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "stretch",
				gap: 32,
				width: "100%"
			}}
		>
			{Object.keys(formik.initialValues.billingDetails).map((key) => (
				<div key={key} style={{ position: "relative" }}>
					<label>
						<span
							style={{
								display: "inline-block",
								marginBottom: 8,
								color: "var(--foreground-semi)",
								lineHeight: "24px"
							}}
						>
							{t(`checkout.billingDetails.${key}`)}
							{isRequiredField(validationSchema, key) && (
								<span style={{ color: "red" }}>*</span>
							)}
						</span>
						<TextField
							name={`billingDetails.${key}`}
							value={
								formik.values.billingDetails[
									key as keyof typeof formik.values.billingDetails
								]
							}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.errors.billingDetails &&
								(formik.errors.billingDetails[
									key as keyof typeof formik.errors.billingDetails
								] as unknown as string)
							}
							style={{ cursor: "text" }}
						/>
					</label>
				</div>
			))}
		</div>
	);
};
