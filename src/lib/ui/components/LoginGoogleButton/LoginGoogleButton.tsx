import Image from "next/image";

import Button from "@/lib/ui/elements/Button";
import { TBaseComponent } from "@/types";

import IconGoogle from "@/images/icons/google.svg";

type TLoginGoogleButton = TBaseComponent<HTMLButtonElement>;

export const LoginGoogleButton: React.FC<TLoginGoogleButton> = ({ ...otherProps }) => {
	return (
		<Button type="secondary" {...otherProps}>
			<Image src={IconGoogle} alt="Google" draggable={false} />
			Sign up with Google
		</Button>
	);
};

export default LoginGoogleButton;
