"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { fontInter } from "@/app/fonts";
import { Button, TextField } from "@/lib/ui/elements";
import { validatePhone, validatePassword } from "@/lib/utils/validation";

import { useUsers } from "@/service/users";
import { useTranslation } from "react-i18next";

const LoginForm: React.FC = () => {
	const { t } = useTranslation();
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{
		phone?: string | null;
		password?: string | null;
		loginError?: string | null;
	}>();

	const router = useRouter();

	const [, currentUser, { loginUser }] = useUsers();

	useEffect(() => {
		if (currentUser) router.push("/");
	}, [currentUser, router]);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		const phoneError = validatePhone(phone);
		const passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			loginUser({ phone, password });

			if (!currentUser) {
				setErrors({ loginError: "Invalid phone number or password" });
			}
		}
	};

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
				onSubmit={handleLogin}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					width: "100%",
					textAlign: "start"
				}}
			>
				{errors?.loginError && <span style={{ color: "red" }}>{errors.loginError}</span>}
				<div style={{ position: "relative" }}>
					<label htmlFor="phone"></label>
					<TextField
						as="flat"
						placeholder={t("login.phonePlaceholder")}
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						error={errors?.phone!}
					/>
				</div>
				<div style={{ position: "relative", marginTop: "40px" }}>
					<label htmlFor="password"></label>
					<TextField
						as="flat"
						placeholder={t("login.passwordPlaceholder")}
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={errors?.password!}
					/>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between"
					}}
				>
					<Button
						type="primary"
						submit
						style={{
							margin: "40px 0 16px"
						}}
					>
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

export default LoginForm;
