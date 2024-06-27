import { CSSProperties } from "react";

import styles from "./Select.module.css";

type TSelectOption = React.DetailedHTMLProps<
	React.OptionHTMLAttributes<HTMLOptionElement>,
	HTMLOptionElement
> & {
	text: string; // Текст элемента списка
};

type TSelectProps = React.DetailedHTMLProps<
	React.SelectHTMLAttributes<HTMLSelectElement>,
	HTMLSelectElement
>;

interface ISelectProps extends TSelectProps {
	options: TSelectOption[];
	selectStyle?: CSSProperties;
}

// TODO: Стилизация options
export const Select: React.FC<ISelectProps> = ({ options, selectStyle, style, ...otherProps }) => {
	return (
		<div className={styles.select} style={style}>
			<select style={selectStyle} {...otherProps}>
				{options.map(({ key, ...otherProps }) => (
					<option key={key} {...otherProps}>
						{otherProps.text}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
