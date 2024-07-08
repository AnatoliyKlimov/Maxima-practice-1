import Image from "next/image";
import Link from "next/link";

import Button from "@/lib/ui/elements/Button";
import Rating from "@/lib/ui/components/Rating";
import { TBaseComponent, TProduct } from "@/types";

import IconFavorite from "@/images/icons/favorite.svg";
import IconView from "@/images/icons/view.svg";

import "./Card.css";

interface ICardProps extends TBaseComponent {
	product: TProduct;
}

export const Card: React.FC<ICardProps> = ({ product, style, ...otherProps }) => {
	return (
		<div
			className="card"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 8,
				//height: 350,
				width: 270,
				...style
			}}
			{...otherProps}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
					height: 250,
					backgroundColor: "var(--background-secondary)",
					borderRadius: 4,
					overflow: "hidden"
				}}
			>
				<Image
					width={0}
					height={0}
					src={product.image}
					alt={product.title}
					sizes="100vw"
					priority
					style={{
						width: 200,
						height: 190,
						objectFit: "contain"
					}}
				/>
				<Button
					type="incard"
					className="incard-btn"
					style={{
						position: "absolute",
						bottom: 0
					}}
				>
					Add To Cart
				</Button>
				{product.discountPercent && (
					<div
						style={{
							position: "absolute",
							top: 12,
							left: 12,
							padding: "4px 12px",
							backgroundColor: "var(--background-primary)",
							borderRadius: 4,
							fontSize: 12,
							fontWeight: 400,
							lineHeight: "18px",
							color: "#fff"
						}}
					>
						-{product.discountPercent}%
					</div>
				)}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 8,
						position: "absolute",
						top: 12,
						right: 12
					}}
				>
					<Button
						type="icon"
						style={{
							padding: 4,
							backgroundColor: "#fff"
						}}
					>
						<Image src={IconFavorite} alt="" />
					</Button>
					<Button
						type="icon"
						style={{
							padding: 4,
							backgroundColor: "#fff"
						}}
					>
						<Image src={IconView} alt="" />
					</Button>
				</div>
			</div>
			<h4
				style={{
					marginTop: 8,
					fontWeight: 500
				}}
			>
				<Link href={`/product/${product.id}`}>{product.title}</Link>
			</h4>
			<p
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "6px 12px",
					width: "74%",
					fontWeight: 500
				}}
			>
				<span style={{ color: "var(--background-primary)" }}>${product.price}</span>
				{product.priceOld && (
					<span
						style={{
							color: "var(--foreground-semi)",
							textDecoration: "line-through solid var(--foreground-semi)"
						}}
					>
						${product.priceOld}
					</span>
				)}
				<Rating rating={product.rating} />
			</p>
		</div>
	);
};

export default Card;
