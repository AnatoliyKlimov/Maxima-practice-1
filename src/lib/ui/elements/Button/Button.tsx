import React, { ComponentProps, ElementType } from "react";

import styles from "./Button.module.css";

interface IButtonOwnProps<E extends ElementType = ElementType> extends React.PropsWithChildren {
	as?: E;
	type?: "primary" | "secondary"  | "icon" | "cart";
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
	children,
	...otherProps
}: TButtonProps<E>) => {
	const TagName = as || defaultElement;

	return (
		<TagName
			{...otherProps}
			href={href}
			className={`${styles.button} ${styles["button_" + type]}`}
		>
			{children}
		</TagName>
	);
};

export default Button;
