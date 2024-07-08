import { CSSProperties } from "react";

import { TBaseComponent } from "@/types";

import styles from "./Select.module.css";

interface ISelectOption extends TBaseComponent<"option"> {
	text: string;
};

interface ISelectProps extends TBaseComponent<"select"> {
	options: ISelectOption[];
	selectStyle?: CSSProperties;
}

// TODO: Стилизация options
export const Select: React.FC<ISelectProps> = ({ options, selectStyle, style, ...otherProps }) => {
	return (
		<div className={styles.select} style={style}>
			<select style={selectStyle} {...otherProps}>
				{options.map(({ key, text, ...otherProps }) => (
					<option key={key} {...otherProps}>
						{text}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
