"use client";

import LoginForm from "@/components/LoginForm/LoginForm";
import Image from "next/image";
import productImage from "@/images/SideImage.png";

const LoginPage = () => {
	return (
		<div>
			<main role="main" className="main-content" style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				margin: "60px 0 140px"
			}}>
				<div className="image-container">
					<Image src={productImage}
						   width={680}
						   alt="Product" />
				</div>
				<aside>
					<LoginForm />
				</aside>
			</main>
		</div>
	);
};

export default LoginPage;
