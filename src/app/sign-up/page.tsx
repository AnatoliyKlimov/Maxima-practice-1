"use client";

import Link from "next/link";
import Image from "next/image";

import RegisterForm from "@/components/RegisterForm";

import productImage from "@/images/SideImage.png";

export default function SignUpPage() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				gap: 0,
				margin: "60px 0 140px"
			}}
		>
			<Image src={productImage} width={680} alt="Product" priority />
			<aside style={{ width: 371 }}>
				<RegisterForm />
				<p
					style={{
						display: "flex",
						justifyContent: "center",
						gap: 16,
						marginTop: 32
					}}
				>
					<span>Already have account?</span>
					<Link href="/sign-in">Log in</Link>
				</p>
			</aside>
		</main>
	);
}
