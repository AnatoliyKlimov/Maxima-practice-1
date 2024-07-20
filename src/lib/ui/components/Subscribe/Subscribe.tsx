import { CSSProperties } from "react";
import Image from "next/image";

import { TBaseComponent } from "@/types";

import IconSend from "@/images/icons/send.svg";

interface ISubscribeProps extends TBaseComponent<"input"> {
	inputStyle?: CSSProperties;
	iconStyle?: CSSProperties;
}

export const Subscribe: React.FC<ISubscribeProps> = ({
	inputStyle,
	iconStyle,
	style,
	...otherProps
}) => {
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 4,
				padding: "12px 16px",
				border: "2px solid #fff",
				borderRadius: 4,
				maxWidth: 280,
				...style
			}}
		>
			<input
				type="text"
				style={{
					marginRight: -100,
					fontSize: 16,
					fontWeight: 400,
					lineHeight: "24px",
					...inputStyle
				}}
				{...otherProps}
			/>
			<Image
				src={IconSend}
				alt=""
				draggable={false}
				style={{ cursor: "pointer", ...iconStyle }}
			/>
		</div>
	);
};

export default Subscribe;
