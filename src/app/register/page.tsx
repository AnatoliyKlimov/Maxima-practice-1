'use client';

import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Image from 'next/image';
import productImage from '@/images/SideImage.png';

const RegisterPage = () => {
	return (
		<div>
			<main role='main' className='main-content'>
				<div className='image-container'>
					<Image src={productImage} alt='Product' />
				</div>
				<aside>
					<RegisterForm />
				</aside>
			</main>
		</div>
	);
};

export default RegisterPage;
