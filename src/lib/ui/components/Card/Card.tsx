import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import i18next from "i18next";
import Button from "@/lib/ui/elements/Button";
import Rating from "@/lib/ui/components/Rating";
import Colors from "@/lib/ui/components/Colors";
import { unique } from "@/lib/utils";
import { useCart, useWishlist } from "@/service";
import { TBaseComponent, TProduct } from "@/types";
import IconFavorite from "@/images/icons/favorite.svg";
import IconView from "@/images/icons/view.svg";
import IconDelete from "@/images/icons/delete.svg";
import "./Card.css";

type TCardButton = "wishlist" | "view" | "delete";
type TCardButtons = TCardButton[];

interface ICardProps extends TBaseComponent {
	product: TProduct;
	buttons: TCardButtons;
	wrapRating?: boolean;
}

export const Card: React.FC<ICardProps> = ({
	product,
	buttons,
	wrapRating = true,
	style,
	...otherProps
}) => {
	const [, { addProduct, deleteProduct }] = useWishlist();
	const [, { addProduct: addProductToCart }] = useCart();
	const router = useRouter();

	const handleCardClick = () => {
		router.push(`/product/${product.id}`);
	};

	const renderButtons = () =>
		unique<string>(buttons).map((button) => {
			let icon: any,
				key: string = "",
				action = (e: React.MouseEvent) => {};

			switch (button) {
				case "wishlist":
					icon = IconFavorite;
					key = "wishlist";
					action = (e: React.MouseEvent) => {
						e.stopPropagation();
						addProduct(product.id);
					};
					break;

				case "view":
					icon = IconView;
					key = "view";
					action = (e: React.MouseEvent) => {
						e.stopPropagation();
						router.push(`/product/${product.id}`);
					};
					break;

				case "delete":
					icon = IconDelete;
					key = "delete";
					action = (e: React.MouseEvent) => {
						e.stopPropagation();
						deleteProduct(product.id);
					};
					break;

				default:
					break;
			}

			return (
				<Button
					key={`card-button-${key}`}
					type="icon"
					onClick={action}
					style={{
						padding: 4,
						backgroundColor: "#fff"
					}}
				>
					<Image src={icon} alt="" />
				</Button>
			);
		});

	return (
		<div
			className="card"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 8,
				minHeight: 350,
				width: 270,
				...style
			}}
			onClick={handleCardClick}
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
						objectFit: product.imageFit || "contain"
					}}
				/>
				<Button
					type="incard"
					onClick={(e) => {
						e.stopPropagation();
						addProductToCart({ id: product.id });
					}}
					className="incard-btn"
					style={{
						position: "absolute",
						bottom: 0
					}}
				>
					{i18next.t("addToC")}
				</Button>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 12,
						position: "absolute",
						top: 12,
						left: 12
					}}
				>
					{product.discountPercent && (
						<div
							style={{
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
					{product.isNew && (
						<div
							style={{
								padding: "4px 12px",
								backgroundColor: "var(--button-green)",
								borderRadius: 4,
								fontSize: 12,
								fontWeight: 400,
								lineHeight: "18px",
								color: "#fff"
							}}
						>
							{i18next.t("card.new")}
						</div>
					)}
				</div>
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
					{renderButtons()}
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
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: 12,
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
				{!wrapRating && product.rating && <Rating rating={product.rating} />}
			</div>
			{wrapRating && product.rating && <Rating rating={product.rating} />}
			{product.colors && (
				<Colors
					name={product.id}
					colors={product.colors}
					style={{
						display: "flex",
						padding: "2px 0",
						marginTop: 4
					}}
				/>
			)}
		</div>
	);
};

export default Card;
