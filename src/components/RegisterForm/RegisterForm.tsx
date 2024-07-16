"use client";

import { useState, useEffect } from "react";
import { validatePhone, validatePassword } from "@/lib/utils/validation";
import { Button, TextField } from "@/lib/ui/elements";
import { LoginGoogleButton } from "@/lib/ui/components";

const RegisterForm: React.FC = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{ name?: string; phone?: string; password?: string }>({});

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();

		const phoneError = validatePhone(phone);
		const passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			// Логика отправки данных на сервер
			console.log("Form submitted successfully");
		}
	};

	useEffect(() => {
		setErrors((prevErrors) => ({
			...prevErrors,
			phone: phone ? "" : prevErrors.phone,
			password: password ? "" : prevErrors.password,
		}));
	}, [phone, password]);

	return (
		<div className="register-form-container">
			<h2>Create an account</h2>
			<p style={{ margin: "24px 0 48px" }}>Enter your details below</p>
			<form
				onSubmit={handleRegister}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "stretch",
					maxWidth: 293,
					textAlign: "start"
				}}
			>
				<div className="form-group" style={{ position: "relative" }}>
					<label htmlFor="name"></label>
					<TextField
						type="flat"
						id="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						error={errors.name}
					/>
				</div>

				<div
					className="form-group"
					style={{
						margin: "40px 0",
						position: "relative"
					}}
				>
					<label htmlFor="phone"></label>
					<TextField
						type="flat"
						id="phone"
						value={phone}
						placeholder="Email or Phone Number"
						onChange={(e) => setPhone(e.target.value)}
						error={errors.phone}
					/>
				</div>

				<div className="form-group" style={{ position: "relative" }}>
					<label htmlFor="password"></label>
					<TextField
						type="flat"
						placeholder="Password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={errors.password}
					/>
				</div>

				<Button
					type="primary"
					className="btn-create-account"
					style={{
						margin: "40px 0 16px"
					}}
				>
					Create Account
				</Button>
			</form>

			<LoginGoogleButton />
		</div>
	);
};

export default RegisterForm;
