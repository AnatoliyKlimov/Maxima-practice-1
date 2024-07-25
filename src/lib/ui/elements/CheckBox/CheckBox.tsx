"use client";

import { CSSProperties, ReactNode } from "react";

import { TBaseComponent } from "@/types";

import styles from "./CheckBox.module.css";

interface ICheckBoxProps extends TBaseComponent<"input"> {
	label: ReactNode;
	inputStyle?: CSSProperties;
	labelStyle?: CSSProperties;
	error?: string;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({
	label,
	style,
	inputStyle,
	labelStyle,
	error,
	className = "",
	...otherProps
}) => {
	return (
		<div
			className={`${styles.checkboxContainer} ${className}`}
			style={{ position: "relative", ...style }}
		>
			<label
				style={{
					display: "inline-flex",
					alignItems: "center",
					cursor: "pointer"
				}}
			>
				<input
					{...otherProps}
					className={`${styles.checkbox} ${error ? styles.inputError : ""}`}
					style={{
						flexShrink: 0,
						borderRadius: 4,
						width: 24,
						height: 24,
						marginRight: 16,
						backgroundColor: "var(--background-secondary)",
						cursor: "pointer",
						...inputStyle
					}}
					type="checkbox"
				/>
				<div style={labelStyle}>{label}</div>
			</label>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};
