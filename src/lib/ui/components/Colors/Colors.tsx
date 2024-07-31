"use client";

import { useRadioButtons } from "@/lib/utils/hooks";
import { TBaseComponent, TColors } from "@/types";

import styles from "./Colors.module.css";

interface IColorsProps extends TBaseComponent<"input"> {
	name: string;
	colors: TColors;
}

/** @public */
export const Colors: React.FC<IColorsProps> = ({ name, colors, style, ...otherProps }) => {
	const [colorsValue, colorsInputProps] = useRadioButtons(`colors-${name}`, colors[0].value);

	return (
		<div style={style} {...otherProps}>
			<form>
				{colors.map((color) => (
					<input
						key={`colors-${name}-${color.value}`}
						className={styles.colors}
						style={{
							borderRadius: "50%",
							width: 18,
							height: 18,
							marginLeft: 2,
							marginRight: 8,
							backgroundColor: color.value,
							outline: `2px solid ${color.value}`,
							cursor: "pointer"
						}}
						value={color.value}
						checked={colorsValue === color.value}
						{...colorsInputProps}
					/>
				))}
			</form>
		</div>
	);
};

/** @alias */
export default Colors;
