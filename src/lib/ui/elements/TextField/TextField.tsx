import { TBaseComponent } from "@/types";

import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	type?: "primary" | "flat";
}

type TTextArea = TBaseComponent<"textarea">;

export const TextField: React.FC<ITextFieldProps> = ({ type = "primary", ...otherProps }) => {
	return (
		<input
			{...otherProps}
			className={`${styles.textField} ${styles["textField_" + type]} ${otherProps.className}`}
			type="text"
		/>
	);
};

export const TextArea: React.FC<TTextArea> = ({ ...otherProps }) => {
	return <textarea {...otherProps} className={`${styles.textArea} ${otherProps.className}`} />;
};
