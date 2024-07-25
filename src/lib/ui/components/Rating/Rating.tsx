import Image from "next/image";

import { TBaseComponent, TRating } from "@/types";

import StarFilled from "@/images/icons/star-filled.svg";
import StarHalf from "@/images/icons/star-half.svg";
import Star from "@/images/icons/star.svg";

interface IRatingProps extends TBaseComponent {
	rating: TRating;
}

export const Rating: React.FC<IRatingProps> = ({
	rating: { value, reviewsCount },
	style,
	...otherProps
}) => {
	const fill = () => {
		value = value > 5 ? 5 : value < 0 ? 0 : value;

		const filled = Math.floor(value);
		const half = value % 1 == 0 ? 0 : 1;
		const empty = 5 - filled - half;

		return (
			<div
				style={{
					display: "inline-flex",
					alignItems: "center",
					marginTop: -2
				}}
			>
				{Array.from(Array(filled), (_, i) => (
					<Image key={`filled-${i}`} src={StarFilled} height={16} alt="" />
				))}
				{Array.from(Array(half), (_, i) => (
					<Image key={`half-${i}`} src={StarHalf} height={18} alt="" />
				))}
				{Array.from(Array(empty), (_, i) => (
					<Image key={`empty-${i}`} src={Star} height={16} alt="" />
				))}
			</div>
		);
	};

	return (
		<div
			style={{
				display: "inline-flex",
				alignItems: "center",
				...style
			}}
			{...otherProps}
		>
			{fill()}
			<span
				style={{
					marginLeft: 12,
					fontSize: 14,
					fontWeight: 600,
					lineHeight: "20px",
					color: "var(--foreground-semi)"
				}}
			>
				({reviewsCount})
			</span>
		</div>
	);
};

export default Rating;
