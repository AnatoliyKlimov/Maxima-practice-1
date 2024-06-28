import { CSSProperties } from "react";
import Image from "next/image";

import IconSearch from "@/images/icons/search.svg";

type TSearchProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

interface ISearchProps extends TSearchProps {
	inputStyle?: CSSProperties;
}

export const Search: React.FC<ISearchProps> = ({ inputStyle, style, ...props }) => {
	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 4,
				padding: "7px 20px",
				backgroundColor: "#F5F5F5",
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
				{...props}
			/>
			<Image src={IconSearch} alt="" draggable={false} style={{ cursor: "pointer" }} />
		</div>
	);
};

export default Search;
