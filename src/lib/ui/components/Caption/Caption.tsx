import { TBaseComponent } from "@/types";

interface ICaptionProps extends TBaseComponent {
	text?: string;
}

export const Caption: React.FC<ICaptionProps> = ({ text, style, ...otherProps }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				gap: 16,
				marginBottom: 20,
				...style
			}}
			{...otherProps}
		>
			<div
				style={{
					height: 40,
					width: 20,
					backgroundColor: "var(--background-primary)",
					borderRadius: 4
				}}
			></div>
			<h6
				style={{
					fontWeight: 500,
					lineHeight: "21px",
					color: "var(--background-primary)"
				}}
			>
				{text}
			</h6>
		</div>
	);
};

export default Caption;
