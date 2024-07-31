"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import { fontInter } from "@/app/fonts";
import { Button, TextField } from "@/lib/ui/elements";
import { LoginGoogleButton } from "@/lib/ui/components";
import { emailOrPhoneNumber } from "@/lib/utils/validation";

import { useUsers } from "@/service/users";

import { TSignUp } from "@/types";

/** @public */
export const SignUpForm: React.FC = () => {
	const { t } = useTranslation();
	const router = useRouter();

	const [, currentUser, { registerUser }] = useUsers();

	const [signUpError, setSignUpError] = useState<string>();

	useEffect(() => {
		if (currentUser) router.push("/");
	}, [currentUser, router]);

	const initialValues: TSignUp = {
		name: "",
		username: "",
		password: ""
	};

	Yup.addMethod(Yup.string, "emailOrPhoneNumber", emailOrPhoneNumber);

	const validationSchema = Yup.object({
		name: Yup.string().required(t("cra.validation.required")),
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
			registerUser(values);

			// Ошибка показывается в случае успеха с момента логина до редиректа
			// и это не исправить, т. к. сейчас авторизация работает только на клиенте
			if (!currentUser) setSignUpError("cra.error");
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
				{t("cra.create")}
			</h2>
			<p style={{ margin: "24px 0 48px" }}>{t("cra.enter")}</p>
			<form
				onSubmit={formik.handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					gap: 40,
					width: "100%",
					textAlign: "start"
				}}
			>
				{signUpError && <span style={{ color: "red" }}>{t(signUpError)}</span>}
				<TextField
					as="flat"
					placeholder={t("cra.name")}
					name="name"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.name}
				/>
				<TextField
					as="flat"
					placeholder={t("cra.email")}
					name="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.errors.username}
				/>
				<TextField
					as="flat"
					placeholder={t("cra.passw")}
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
						flexDirection: "column"
					}}
				>
					<Button submit style={{ margin: "40px 0 16px" }}>
						{t("cra.creatB")}
					</Button>
					<LoginGoogleButton />
				</div>
			</form>
		</div>
	);
};

/** @alias */
export default SignUpForm;
