"use client";

import { CSSProperties, ReactNode } from "react";

import { TBaseComponent } from "@/types";

import styles from "./RadioGroup.module.css";

type TRadioOption = {
	content: ReactNode;
	value: string;
};

interface IRadioGroupProps extends TBaseComponent<"input"> {
	name: string;
	options: TRadioOption[];
	mode?: "horizontal" | "vertical";
	inputStyle?: CSSProperties;
	labelStyle?: CSSProperties;
	error?: string;
}

export const RadioGroup: React.FC<IRadioGroupProps> = ({
	name,
	options,
	mode = "horizontal",
	style,
	inputStyle,
	labelStyle,
	value,
	error,
	className = "",
	...otherProps
}) => {
	const renderInputs = () =>
		options.map((option) => (
			<label
				key={`radio-${name}-${option.value}`}
				style={{
					display: "inline-flex",
					alignItems: "center",
					cursor: "pointer"
				}}
			>
				<input
					{...otherProps}
					className={`${styles.radio} ${error ? styles.inputError : ""}`}
					style={{
						borderRadius: "50%",
						width: 18,
						height: 18,
						marginTop: 2,
						marginLeft: 2,
						marginRight: 16,
						backgroundColor: "transparent",
						outline: "2px solid #000",
						cursor: "pointer",
						...inputStyle
					}}
					value={option.value}
					checked={value === option.value}
					type="radio"
					name={name}
				/>
				<div style={labelStyle}>{option.content}</div>
			</label>
		));

	return (
		<div
			className={`${styles.radioContainer} ${styles["radioContainer_" + mode]} ${className}`}
			style={{ position: "relative", ...style }}
		>
			{renderInputs()}
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
