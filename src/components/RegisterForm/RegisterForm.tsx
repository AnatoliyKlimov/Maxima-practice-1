import React, { useState } from "react";
import { validatePhone, validatePassword } from "../../utils/validation";

const RegisterForm: React.FC = () => {
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState<{ phone?: string, password?: string }>({});

	const handleRegister = (e: React.FormEvent) => {
		e.preventDefault();

		let phoneError = validatePhone(phone);
		let passwordError = validatePassword(password);

		if (phoneError || passwordError) {
			setErrors({ phone: phoneError, password: passwordError });
		} else {
			// логика для отправки данных на сервер
		}
	};

	return (
		<div className="register-form-container">
			<h2>Create an account</h2>

			<form onSubmit={handleRegister}>
				<div className="form-group">
					<label htmlFor="phone">Email or Phone Number</label>
					<input
						type="text"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					{errors.phone && <span className="error">{errors.phone}</span>}
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					{errors.password && <span className="error">{errors.password}</span>}
				</div>

				<button type="submit" className="btn-create-account">Create Account</button>
			</form>

			<button className="btn-google-signup">Sign up with Google</button>
		</div>
	);
};

export default RegisterForm;
