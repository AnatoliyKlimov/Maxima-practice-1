import { TBaseComponent } from "@/types";
import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	type?: "primary" | "flat";
	error?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ type = "primary", error, ...otherProps }) => {
	return (
		<div className={`${styles.textFieldContainer}`}>
			<input
				{...otherProps}
				className={`${styles.textField} ${styles["textField_" + type]} ${error ? styles.inputError : ""} ${otherProps.className}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

interface TTextAreaProps extends TBaseComponent<"textarea"> {
	error?: string;
}

export const TextArea: React.FC<TTextAreaProps> = ({ error, ...otherProps }) => {
	return (
		<div className={`${styles.textAreaContainer}`}>
            <textarea
				{...otherProps}
				className={`${styles.textArea} ${error ? styles.inputError : ""} ${otherProps.className}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
