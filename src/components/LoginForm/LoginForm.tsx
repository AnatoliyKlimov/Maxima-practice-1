"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store/store";
import { loginUser } from "@/lib/store/userSlise";
import { validatePhone, validatePassword } from "@/lib/utils/validation";
import { Button, TextField } from "@/lib/ui/elements";
import Link from "next/link";

const LoginForm: React.FC = () => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{ phone?: string; password?: string; loginError?: string }>();
	const currentUser = useSelector((state: RootState) => state.user.currentUser);
	const dispatch = useDispatch();
	const router = useRouter();

	useEffect(() => {
		if (currentUser) {
			router.push("/");
		}
	}, [currentUser, router]);

	const handleLogin = (e: React.FormEvent) => {
		e.preventDefault();

		// Проверки и валидация
		const phoneError = validatePhone(phone);
		const passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			// Проверка пользователя в Redux
			dispatch(loginUser({ phone, password }));

			if (!currentUser) {
				setErrors({ loginError: "Invalid phone number or password" });
			}
		}
	};

	return (
		<div className="login-form-container">
			<h2>Log in to Exclusive</h2>
			<p style={{
				margin: '24px 0 45px'
			}}> Enter your details below</p>
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
				{errors?.loginError && <span className="error">{errors.loginError}</span>}
				<div className="form-group" style={{ position: "relative" }}>
					<label htmlFor="phone"></label>
					<TextField
						as="flat"
						type="text"
						id="phone"
						placeholder="Email or Phone Number"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						error={errors?.phone}
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
						error={errors?.password}
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
