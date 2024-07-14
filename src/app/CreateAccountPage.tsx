import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RegisterForm from '../components/RegisterForm/RegisterForm';

import productImage from '../images/SideImage.png';

const CreateAccountPage: React.FC = () => {
	return (
		<div className="create-account-page">
			<Header />
			<main>
				<div className="create-account-content">
					<div className="image-container">
						<img src={productImage} alt="Product" />
					</div>
					<RegisterForm />
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default CreateAccountPage;
