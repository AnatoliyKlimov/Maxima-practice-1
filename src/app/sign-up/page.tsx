import Image from "next/image";

import RegisterForm from "@/components/RegisterForm/RegisterForm";

import productImage from "@/images/SideImage.png";

const CreateAccountPage: React.FC = () => {
	return (
		<main>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					padding: "60px 0 140px",
					columnGap: 120
				}}
			>
				<div className="image-container">
					<Image src={productImage} alt="Product" />
				</div>
				<RegisterForm />
			</div>
		</main>
	);
};

export default CreateAccountPage;
