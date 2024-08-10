import { CSSProperties, useState } from "react";
import Image from "next/image";

import Button from "@/lib/ui/elements/Button";

import { TBaseComponent } from "@/types";

import IconView from "@/images/icons/view.svg";

import styles from "./TextField.module.css";

interface ITextFieldProps extends TBaseComponent<"input"> {
	as?: "primary" | "secondary" | "flat";
	wrapperStyle?: CSSProperties;
	error?: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
	as = "primary",
	wrapperStyle,
	error,
	className = "",
	type,
	...otherProps
}) => {
	const [inputType, setInputType] = useState("password");

	return (
		<div style={wrapperStyle} className={`${styles.textFieldContainer} ${className}`}>
			<input
				{...otherProps}
				type={inputType}
				className={`${styles.textField} ${styles["textField_" + as]} ${
					error ? styles.inputError : ""
				}`}
			/>
			{type == "password" && (
				<Button
					type="icon"
					onClick={() =>
						setInputType((prevType) => (prevType == "password" ? "text" : "password"))
					}
					style={{
						position: "absolute",
						right: 0,
						top: 0,
						backgroundColor: "transparent",
						width: 16,
						height: 16
					}}
				>
					<Image src={IconView} alt="" width={16} height={16}></Image>
				</Button>
			)}
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

interface TTextAreaProps extends TBaseComponent<"textarea"> {
	wrapperStyle?: CSSProperties;
	error?: string;
}

export const TextArea: React.FC<TTextAreaProps> = ({
	wrapperStyle,
	error,
	className = "",
	...otherProps
}) => {
	return (
		<div style={wrapperStyle} className={`${styles.textAreaContainer} ${className}`}>
			<textarea
				{...otherProps}
				className={`${styles.textArea} ${error ? styles.inputError : ""}`}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
