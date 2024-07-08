import { TBaseComponent, TColors } from "@/types";

interface IColorsProps extends TBaseComponent<"input"> {
	name: string;
	colors: TColors;
}

export const Colors: React.FC<IColorsProps> = ({ name, colors, style, ...otherProps }) => {
	return (
		<div style={style} {...otherProps}>
			{colors.map((color) => (
				<input
					type="radio"
					name={`colors-${name}`}
					value={color.value}
					style={{
						borderRadius: "50%",
						width: 16,
						height: 16
					}}
				/>
			))}
		</div>
	);
};
