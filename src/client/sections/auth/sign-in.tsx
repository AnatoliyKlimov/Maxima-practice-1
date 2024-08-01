import Image from "next/image";

import SignInForm from "@/client/components/SignInForm";

import ImageProduct from "@/images/SideImage.webp";

export const SignInSection: React.FC = () => {
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
			<Image src={ImageProduct} width={680} alt="Product" priority />
			<aside style={{ width: 371 }}>
				<SignInForm />
			</aside>
		</main>
	);
};
