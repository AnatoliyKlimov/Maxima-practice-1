import { TBaseComponent } from "@/types";

import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	as?: "primary" | "secondary" | "flat";
	error?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
	as = "primary",
	error,
	className = "",
	...otherProps
}) => {
	return (
		<div className={`${styles.textFieldContainer} ${className}`}>
			<input
				{...otherProps}
				className={`${styles.textField} ${styles["textField_" + as]} ${
					error ? styles.inputError : ""
				}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

interface TTextAreaProps extends TBaseComponent<"textarea"> {
	error?: string;
}

export const TextArea: React.FC<TTextAreaProps> = ({ error, className = "", ...otherProps }) => {
	return (
		<div className={`${styles.textAreaContainer} ${className}`}>
			<textarea
				{...otherProps}
				className={`${styles.textArea} ${error ? styles.inputError : ""}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
