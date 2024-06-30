import Image from "next/image";

import Button from "@/lib/ui/elements/Button";

import IconGoogle from "@/images/icons/google.svg";

export const LoginGoogleButton: React.FC = () => {
	return (
		<Button type="secondary">
			<Image src={IconGoogle} alt="Google" />
			Sign up with Google
		</Button>
	);
};

export default LoginGoogleButton;
