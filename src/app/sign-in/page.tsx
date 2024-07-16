import Image from "next/image";

import RegisterForm from "@/components/RegisterForm/RegisterForm";

import productImage from "@/images/SideImage.png";

const LoginPage: React.FC = () => {
	return (
		<main>
			<div>
				<div className="image-container">
					<Image src={productImage} alt="Product" />
				</div>
				<RegisterForm />
			</div>
		</main>
	);
};

export default LoginPage;
