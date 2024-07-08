import { TBaseComponent, TColors } from "@/types";

interface IColorsProps extends TBaseComponent<"input"> {
	name: string;
	colors: TColors;
}

export const Colors: React.FC<IColorsProps> = ({ name, colors, style, ...otherProps }) => {
	return (
		<div style={style} {...otherProps}>
			<input type="radio" name={`colors-${name}`} />
		</div>
	);
};
