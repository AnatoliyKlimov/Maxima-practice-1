"use client";

import { useState } from "react";
import { validatePhone, validatePassword } from "@/lib/utils/validation";
import { Button, TextField } from "@/lib/ui/elements";
import { LoginGoogleButton } from "@/lib/ui/components";

const RegisterForm: React.FC = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{ name?: string; phone?: string; password?: string }>({});
	const [isPhoneFocused, setIsPhoneFocused] = useState(false);

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();

		// Проверки и валидация
		let phoneError = validatePhone(phone);
		let passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			// Логика отправки данных на сервер
		}
	};

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
				<div className="form-group">
					<label htmlFor="name"></label>
					<TextField
						as="flat"
						type="text"
						id="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					{errors.name && <span className="error">{errors.name}</span>}
				</div>

				<div
					className="form-group"
					style={{
						margin: "40px 0"
					}}
				>
					<label htmlFor="phone"></label>
					<div style={{ position: "relative" }}>
						<TextField
							as="flat"
							type="text"
							id="phone"
							value={phone}
							placeholder="Email or Phone Number"
							onFocus={() => setIsPhoneFocused(true)}
							onBlur={() => setIsPhoneFocused(false)}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
					{errors.phone && <span className="error">{errors.phone}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="password"></label>
					<TextField
						as="flat"
						placeholder="Password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && <span className="error">{errors.password}</span>}
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
