import { TBaseComponent } from "@/types";

import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	as?: "primary" | "flat";
}

type TTextArea = TBaseComponent<"textarea">;

export const TextField: React.FC<ITextFieldProps> = ({ as = "primary", ...otherProps }) => {
	return (
		<input
			{...otherProps}
			className={`${styles.textField} ${styles["textField_" + as]} ${otherProps.className}`}
		/>
	);
};

export const TextArea: React.FC<TTextArea> = ({ ...otherProps }) => {
	return <textarea {...otherProps} className={`${styles.textArea} ${otherProps.className}`} />;
};
