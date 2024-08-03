"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { TextField, Button } from "@/lib/ui/elements";
import { Breadcrumb } from "@/client/components";

import { useUsers } from "@/service/users";

import type { TUser } from "@/types";

type TFormValues = Omit<TUser, "username" | "password" | "phone"> & {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
};

export const AccountSection: React.FC = () => {
	const [, currentUser, { updateUser }] = useUsers();

	const { t } = useTranslation();

	if (!currentUser) throw new Error(`403 ${t("errors.forbidden.status")}`);

	const initialValues: TFormValues = {
		firstName: currentUser?.firstName || "",
		lastName: currentUser?.lastName || "",
		email: currentUser?.email || "",
		address: currentUser?.address || "",
		currentPassword: "",
		newPassword: "",
		confirmPassword: ""
	};

	const formik = useFormik({
		initialValues,
		validationSchema: Yup.object({
			firstName: Yup.string().required(t("office.validation.firstNameRequired")),
			lastName: Yup.string().required(t("office.validation.lastNameRequired")),
			email: Yup.string()
				.email(t("office.validation.emailInvalid"))
				.required(t("office.validation.emailRequired")),
			currentPassword: Yup.string().min(6, t("office.validation.passwordLength")),
			newPassword: Yup.string().min(6, t("office.validation.passwordLength")),
			confirmPassword: Yup.string().oneOf(
				[Yup.ref("newPassword")],
				t("office.validation.passwordsMatch")
			)
		}),
		onSubmit: (values) => {
			const updates =
				values.currentPassword === currentUser!.password
					? { ...values, password: values.newPassword }
					: { ...values };

			updateUser({
				username: currentUser!.username,
				...updates
			});
		}
	});

	return (
		<main style={{ gap: 80 }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "end"
				}}
			>
				<Breadcrumb />
				<p>
					{t("office.welcome")}{" "}
					<span style={{ color: "var(--background-primary" }}>
						{currentUser.firstName} {currentUser.lastName}
					</span>
				</p>
			</div>
			<div style={{ display: "flex", justifyContent: "space-between", marginBottom: 140 }}>
				<div>
					<h3 style={{ fontSize: 16, fontWeight: 500 }}>{t("office.manage")}</h3>
					<ul
						style={{
							display: "flex",
							flexDirection: "column",
							padding: "16px 0 20px 35px",
							gap: 10,
							color: "var(--foreground-semi)"
						}}
					>
						<li style={{ color: "var(--background-primary)" }}>
							{t("office.profile")}
						</li>
						<li>
							<Link href="/account/address-book">{t("office.address")}</Link>
						</li>
						<li>
							<Link href="/account/payment-options">{t("office.payment")}</Link>
						</li>
					</ul>
					<h3 style={{ fontSize: 16, fontWeight: 500 }}>{t("office.orders")}</h3>
					<ul
						style={{
							display: "flex",
							flexDirection: "column",
							padding: "16px 0 20px 35px",
							gap: 10,
							color: "var(--foreground-semi)"
						}}
					>
						<li>
							<Link href="/account/returns">{t("office.returns")}</Link>
						</li>
						<li>
							<Link href="/account/cancellations">{t("office.cancel")}</Link>
						</li>
					</ul>
					<h3 style={{ fontSize: 16, fontWeight: 500 }}>{t("office.wishlist")}</h3>
				</div>
				<div
					style={{
						width: 870,
						padding: 40,
						boxShadow: "0px 1px 13px 0px rgba(0, 0, 0, 0.05)"
					}}
				>
					<h2
						style={{
							fontSize: 20,
							fontWeight: 500,
							marginBottom: 16,
							color: "var(--background-primary)"
						}}
					>
						{t("office.edit")}
					</h2>
					<form
						onSubmit={formik.handleSubmit}
						style={{
							lineHeight: "50px"
						}}
					>
						<div style={{ display: "flex", gap: 50, marginBottom: 30 }}>
							<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
								<label htmlFor="firstName" style={{ marginBottom: 8 }}>
									{t("office.first")}
								</label>
								<TextField
									name="firstName"
									placeholder={t("office.first")}
									value={formik.values.firstName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.firstName}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
								<label htmlFor="lastName" style={{ marginBottom: 8 }}>
									{t("office.last")}
								</label>
								<TextField
									name="lastName"
									placeholder={t("office.last")}
									value={formik.values.lastName}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.lastName}
								/>
							</div>
						</div>
						<div style={{ display: "flex", gap: 50, width: "100%", marginBottom: 30 }}>
							<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
								<label htmlFor="email" style={{ marginBottom: 8 }}>
									{t("office.email")}
								</label>
								<TextField
									name="email"
									placeholder={t("office.email")}
									value={formik.values.email}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.email}
								/>
							</div>
							<div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
								<label htmlFor="address" style={{ marginBottom: 8 }}>
									{t("office.addr")}
								</label>
								<TextField
									name="address"
									placeholder={t("office.addr")}
									value={formik.values.address}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									error={formik.errors.address}
								/>
							</div>
						</div>
						<div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
							<label htmlFor="currentPassword" style={{ marginBottom: 8 }}>
								{t("office.change")}
							</label>
							<TextField
								name="currentPassword"
								type="password"
								placeholder={t("office.current")}
								value={formik.values.currentPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
						</div>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 20,
								marginBottom: 24
							}}
						>
							<TextField
								name="newPassword"
								type="password"
								placeholder={t("office.newPassword")}
								value={formik.values.newPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.errors.newPassword}
							/>
							<TextField
								name="confirmPassword"
								type="password"
								placeholder={t("office.confirmNew")}
								value={formik.values.confirmPassword}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								error={formik.errors.confirmPassword}
							/>
						</div>
						<div style={{ display: "flex", justifyContent: "flex-end" }}>
							<Button
								type="secondary"
								onClick={formik.resetForm}
								style={{ border: "none" }}
							>
								{t("office.cancelBtn")}
							</Button>
							<Button submit>{t("office.saveBtn")}</Button>
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};
