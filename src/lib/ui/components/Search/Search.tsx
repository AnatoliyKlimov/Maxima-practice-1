import { CSSProperties } from "react";
import Image from "next/image";

import { TBaseComponent } from "@/types";

import IconSearch from "@/images/icons/search.svg";

interface ISearchProps extends TBaseComponent<HTMLInputElement> {
	inputStyle?: CSSProperties;
}

export const Search: React.FC<ISearchProps> = ({ inputStyle, style, ...otherProps }) => {
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 4,
				padding: "7px 20px",
				backgroundColor: "var(--background-secondary)",
				borderRadius: 4,
				...style
			}}
		>
			<input
				type="text"
				style={{
					marginRight: 30,
					fontSize: 12,
					fontWeight: 500,
					lineHeight: "19px",
					...inputStyle
				}}
				{...otherProps}
			/>
			<Image src={IconSearch} alt="" draggable={false} style={{ cursor: "pointer" }} />
		</div>
	);
};

export default Search;
