import { ComponentProps, ElementType } from "react";

import styles from "./Button.module.css";

interface IButtonOwnProps<E extends ElementType = ElementType> extends React.PropsWithChildren {
	as?: E;
	type?: "primary" | "secondary" | "green" | "small" | "incard" | "icon";
	submit?: boolean;
}

type TButtonProps<E extends ElementType> = IButtonOwnProps<E> &
	Omit<ComponentProps<E>, keyof IButtonOwnProps>;

const defaultElement = "button";

export const Button: React.FC<TButtonProps<ElementType>> = <
	E extends ElementType = typeof defaultElement
>({
	as,
	href = "#",
	type = "primary",
	submit,
	children,
	...otherProps
}: TButtonProps<E>) => {
	const TagName = as || defaultElement;
	let submitProp = {};

	if (submit) submitProp = { type: "submit" };

	return (
		<TagName
			{...otherProps}
			{...submitProp}
			href={href}
			className={`${styles.button} ${styles["button_" + type]} ${otherProps.className}`}
		>
			{children}
		</TagName>
	);
};

export default Button;
