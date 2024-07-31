"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

import { fontInter } from "@/app/fonts";
import { Button, TextField } from "@/lib/ui/elements";
import { emailOrPhoneNumber } from "@/lib/utils/validation";

import { useUsers } from "@/service/users";

import { TSignIn } from "@/types";

/** @public */
export const SignInForm: React.FC = () => {
	const { t } = useTranslation();
	const router = useRouter();

	const [, currentUser, { loginUser }] = useUsers();

	const [loginError, setLoginError] = useState<string>();

	useEffect(() => {
		if (currentUser) router.push("/");
	}, [currentUser, router]);

	const initialValues: TSignIn = {
		username: "",
		password: ""
	};

	Yup.addMethod(Yup.string, "emailOrPhoneNumber", emailOrPhoneNumber);

	const validationSchema = Yup.object({
		username: Yup.string()
			.emailOrPhoneNumber(t("cra.validation.username"))
			.required(t("cra.validation.required")),
		password: Yup.string()
			.min(6, t("cra.validation.password"))
			.required(t("cra.validation.required"))
	});

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit: (values) => {
			loginUser(values);

			if (!currentUser) setLoginError("login.error");
		}
	});

	return (
		<div>
			<h2
				className={fontInter.className}
				style={{
					fontSize: 36,
					fontWeight: 500,
					lineHeight: "30px",
					letterSpacing: "0.04em"
				}}
			>
				{t("login.title")}
			</h2>
			<p style={{ margin: "24px 0 45px" }}>{t("login.subtitle")}</p>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					width: "100%",
					gap: 40,
					textAlign: "start"
				}}
			>
				{loginError && <span style={{ color: "red" }}>{t(loginError)}</span>}
				<TextField
					as="flat"
					placeholder={t("login.phonePlaceholder")}
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.username}
				/>
				<TextField
					as="flat"
					placeholder={t("login.passwordPlaceholder")}
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.password}
				/>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<Button submit style={{ margin: "40px 0 16px" }}>
						{t("login.button")}
					</Button>
					<Link
						href="/forgot-password"
						style={{
							color: "red",
							marginTop: 25
						}}
					>
						{t("login.forgotPassword")}
					</Link>
				</div>
			</form>
		</div>
	);
};

/** @alias */
export default SignInForm;
