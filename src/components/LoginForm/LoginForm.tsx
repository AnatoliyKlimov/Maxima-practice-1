"use client";

import { useState } from "react";
import { validatePhone, validatePassword } from "@/lib/utils/validation";
import { Button, TextField } from "@/lib/ui/elements";
import Link from "next/link";

const LoginForm: React.FC = () => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{ phone?: string; password?: string; loginError?: string }>({});

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		// Проверки и валидация
		let phoneError = validatePhone(phone);
		let passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			// Проверка пользователя в localStorage
			const users = JSON.parse(localStorage.getItem("users") || "[]");
			const user = users.find(
				(user: { phone: string; password: string }) => user.phone === phone && user.password === password
			);

			if (user) {
				// Перенаправление на главную страницу
				window.location.href = "/";
			} else {
				setErrors({ loginError: "Invalid phone number or password" });
			}
		}
	};

	return (
		<div className="login-form-container">
			<h2>Log in to Exclusive</h2>
			<p style={{
				margin: '24px 0 45px'
			}}>Enter your details below</p>
			<form
				onSubmit={handleLogin}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					maxWidth: 345,
					textAlign: "start"
				}}
			>
				{errors.loginError && <span className="error">{errors.loginError}</span>}
				<div className="form-group" style={{ position: "relative" }}>
					<label htmlFor="phone"></label>
					<TextField
						as="flat"
						type="text"
						id="phone"
						placeholder="Email or Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						error={errors.phone}
					/>
				</div>

				<div className="form-group" style={{ position: "relative", marginTop: "40px" }}>
					<label htmlFor="password"></label>
					<TextField
						as="flat"
						placeholder="Password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={errors.password}
					/>
				</div>

				<div className="login-btn-group" style={{
					display: "flex",
					alignItems: "center",
					gap: 40
				}}>
					<Button
						type="primary"
						className="btn-login"
						style={{
							margin: "40px 0 16px"
						}}
					>
						Log In
					</Button>

					<Link href="/forgot-password" style={{
						color: "red",
						marginTop: 25
					}}>
						Forgot Password?
					</Link>
				</div>
			</form>


		</div>
	);
};

export default LoginForm;
