"use client";

import { useState } from "react";
import productImage from "@/images/SideImage.png";
import Image from "next/image";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

interface User {
	email: string;
	password: string;

	[key: string]: string;
}

const CreateAccount = () => {
	const [user, setUser] = useState<User>({ email: "", password: "" });

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(user);
		// Здесь нужно добавить логику для отправки данных на сервер
	};

	return (
		<div>
			<main role="main" className="main-content" style={{
				display: 'flex',
				flexDirection: 'row',
				margin: "60px 0 140px"
			}}>
				<div className="image-container">
					<Image src={productImage} 
						   width={805}
						   height={781}
						   alt="Product" />
				</div>
				<aside>
					<RegisterForm/>
				</aside>
			</main>
		</div>
	);
};

export default CreateAccount;
