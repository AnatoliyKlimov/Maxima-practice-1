"use clent";

import Image from "next/image";

import LoginForm from "@/components/LoginForm";

import productImage from "@/images/SideImage.png";

export default function LoginPage() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 0,
				margin: "60px 0 140px",
			}}
		>
			<Image src={productImage} width={680} alt="Product" priority />
			<aside style={{ width: 371 }}>
				<LoginForm />
			</aside>
		</main>
	);
}
