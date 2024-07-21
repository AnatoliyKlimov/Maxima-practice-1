import Image from "next/image";

import Button from "@/lib/ui/elements/Button";
import { TBaseComponent } from "@/types";

import IconGoogle from "@/images/icons/google.svg";
import { useTranslation } from "react-i18next";

type TLoginGoogleButton = TBaseComponent<"button">;

export const LoginGoogleButton: React.FC<TLoginGoogleButton> = ({ ...otherProps }) => {
	const { t } = useTranslation();
	return (
		<Button {...otherProps} type="secondary">
			<Image src={IconGoogle} alt="Google" draggable={false} />
			{t("login.google")}
		</Button>
	);
};

export default LoginGoogleButton;
