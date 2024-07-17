import { TBaseComponent } from "@/types";

import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	as?: "primary" | "flat";
	error?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
	as = "primary",
	error,
	className = "",
	...otherProps
}) => {
	return (
		<div className={`${styles.textFieldContainer}`}>
			<input
				{...otherProps}
				className={`${styles.textField} ${styles["textField_" + as]} ${
					error ? styles.inputError : ""
				} ${className}`}
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
		<div className={`${styles.textAreaContainer}`}>
			<textarea
				{...otherProps}
				className={`${styles.textArea} ${error ? styles.inputError : ""} ${className}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
