import styles from "./TextField.module.css";

interface ITextFieldOwnProps {
	type?: "primary" | "flat";
}

type TTextFieldProps = ITextFieldOwnProps &
	Omit<
		React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
		keyof ITextFieldOwnProps
	>;

type TTextAreaProps = React.DetailedHTMLProps<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	HTMLTextAreaElement
>;

export const TextField: React.FC<TTextFieldProps> = ({ type = "primary", ...otherProps }) => {
	return (
		<input
			{...otherProps}
			className={`${styles.textField} ${styles["textField_" + type]}`}
			type="text"
		/>
	);
};

export const TextArea: React.FC<TTextAreaProps> = ({ ...otherProps }) => {
	return <textarea {...otherProps} className={styles.textArea} />;
};
