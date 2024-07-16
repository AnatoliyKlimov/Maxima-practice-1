import { TBaseComponent } from "@/types";
import styles from "./TextField.module.css";

// Описание интерфейса для TextField
interface ITextFieldProps extends TBaseComponent<"input"> {
	type?: "primary" | "flat";
	error?: string;
}

// Компонент TextField
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

// Описание интерфейса для TextArea
interface TTextAreaProps extends TBaseComponent<"textarea"> {
	error?: string;
}

// Компонент TextArea
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
