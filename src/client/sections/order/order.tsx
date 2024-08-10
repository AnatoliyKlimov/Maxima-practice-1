"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

import { fontInter } from "@/app/fonts";
import { BillingForm, PaymentForm, TFormValues } from "@/client/components/CheckoutForm";
import { Button, CheckBox, TextField } from "@/lib/ui/elements";

import { useBillingDetails, useCart, useOrders, useProducts } from "@/service";

import { TProduct } from "@/types";

/** @public */
export const OrderSection: React.FC = () => {
	const { t } = useTranslation();

	const [
		billingDetails,
		billingDetailsSaved,
		{ save: saveBillingDetails, clear: clearBillingDetails }
	] = useBillingDetails();
	const [, { createOrder }] = useOrders();

	const [cart] = useCart();
	const [products] = useProducts({ ids: cart.map((product) => product.id) });

	const checkoutProducts = (products as TProduct[]).map((product, index) => ({
		...product,
		quantity: cart[index].quantity
	}));

	const initialValues: TFormValues = {
		billingDetails,
		paymentMethod: "bank"
	};

	const validationSchemaBilling = Yup.object({
		firstName: Yup.string().required(t("checkout.validation.required")),
		companyName: Yup.string(),
		streetAddress: Yup.string().required(t("checkout.validation.required")),
		apartment: Yup.string(),
		city: Yup.string().required(t("checkout.validation.required")),
		phone: Yup.string().required(t("checkout.validation.required")),
		email: Yup.string()
			.email(t("checkout.validation.email"))
			.required(t("checkout.validation.required"))
	});

	const validationSchema = Yup.object({
		billingDetails: validationSchemaBilling,
		paymentMethod: Yup.string().required(t("checkout.validation.required"))
	});

	const formik = useFormik<TFormValues>({
		initialValues,
		validationSchema,
		onSubmit: (values) =>
			createOrder({
				...values,
				products: cart,
				productsParsed: checkoutProducts,
				status: "pending",
				createdAt: new Date().toString()
			})
	});

	useEffect(() => {
		if (billingDetailsSaved) saveBillingDetails(formik.values.billingDetails);
		else clearBillingDetails();
	}, [
		formik.values.billingDetails,
		saveBillingDetails,
		clearBillingDetails,
		billingDetailsSaved
	]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 48,
				margin: "80px 0 140px"
			}}
		>
			<h2
				className={fontInter.className}
				style={{
					fontSize: 36,
					lineHeight: "30px"
				}}
			>
				{t("checkout.header")}
			</h2>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						gap: 32,
						width: 470
					}}
				>
					<BillingForm formik={formik} validationSchema={validationSchemaBilling} />
					<CheckBox
						label={t("checkout.billingDetails.save")}
						checked={billingDetailsSaved}
						onChange={(e) => {
							if (e.target.checked) saveBillingDetails(formik.values.billingDetails);
							else clearBillingDetails();
						}}
					/>
				</section>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						width: 527
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: 32
						}}
					>
						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								alignSelf: "stretch"
							}}
						>
							{checkoutProducts.map((product) => (
								<li
									key={`checkout-product-${product.id}`}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										padding: "15px 0",
										backgroundColor: "#fff"
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											gap: 22
										}}
									>
										<Image
											width={0}
											height={0}
											src={product.image}
											alt={product.title}
											sizes="100vw"
											priority
											style={{
												width: 50,
												height: 44,
												objectFit: product.imageFit || "contain"
											}}
										/>
										<span>
											{product.title} x {product.quantity}
										</span>
									</div>
									<span>${product.price * product.quantity}</span>
								</li>
							))}
						</ul>
						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								alignSelf: "stretch",
								gap: 1,
								backgroundColor: "var(--border)",
								margin: "-15px 0"
							}}
						>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "15px 0",
									backgroundColor: "#fff"
								}}
							>
								<span>{t("total.subtotal")}</span>
								<span>
									$
									{checkoutProducts.reduce(
										(acc, product) => acc + product.price * product.quantity,
										0
									)}
								</span>
							</li>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "15px 0",
									backgroundColor: "#fff"
								}}
							>
								<span>{t("total.discount")}</span>
								<span>
									$
									{checkoutProducts.reduce(
										(acc, product) =>
											product.priceOld
												? acc +
												  (product.priceOld - product.price) *
														product.quantity
												: acc,
										0
									)}
								</span>
							</li>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "15px 0",
									backgroundColor: "#fff"
								}}
							>
								<span>{t("total.shipping")}</span>
								<span>{t("total.free")}</span>
							</li>
							<li
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "15px 0",
									backgroundColor: "#fff"
								}}
							>
								<span>{t("total.tot")}</span>
								<span>
									$
									{checkoutProducts.reduce(
										(acc, product) => acc + product.price * product.quantity,
										0
									)}
								</span>
							</li>
						</ul>
						<PaymentForm formik={formik} />
						<div
							style={{
								display: "flex",
								alignSelf: "stretch",
								justifyContent: "space-between",
								gap: 16
							}}
						>
							<TextField
								as="secondary"
								placeholder={t("total.coupon")}
								style={{ padding: "16px 24px" }}
								wrapperStyle={{ flexGrow: 1 }}
							/>
							<Button>{t("total.apply")}</Button>
						</div>
						<Button submit>{t("checkout.submit")}</Button>
					</div>
				</section>
			</form>
		</div>
	);
};

/** @alias */
export default OrderSection;
