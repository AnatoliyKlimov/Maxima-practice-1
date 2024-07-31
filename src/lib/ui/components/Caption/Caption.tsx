import { CSSProperties } from "react";

import { TBaseComponent } from "@/types";

interface ICaptionProps extends TBaseComponent {
	text: string;
	textStyle?: CSSProperties;
	bordered?: boolean;
}

/** @public */
export const Caption: React.FC<ICaptionProps> = ({
	text,
	textStyle,
	bordered = true,
	style,
	...otherProps
}) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 16,
				minHeight: 40,
				...style
			}}
			{...otherProps}
		>
			{bordered && (
				<div
					style={{
						height: 40,
						width: 20,
						backgroundColor: "var(--background-primary)",
						borderRadius: 4
					}}
				></div>
			)}
			<h6
				style={{
					fontWeight: 500,
					lineHeight: "21px",
					color: "var(--background-primary)",
					...textStyle
				}}
			>
				{text}
			</h6>
		</div>
	);
};

/** @alias */
export default Caption;
