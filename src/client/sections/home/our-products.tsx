"use client";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SlickSlider from "react-slick";

import { fontInter } from "@/app/fonts";
import Slider from "@/client/components/Slider";
import Caption from "@/lib/ui/components/Caption";
import Button from "@/lib/ui/elements/Button";
import Card from "@/lib/ui/components/Card";

import { useProducts } from "@/service/products";

import { TProduct } from "@/types";

import ImageArrow from "@/images/icons/arrow-left.svg";

export const OurProductsSection: React.FC = () => {
	const { t } = useTranslation();

	const outProductsSlider1Ref = useRef<SlickSlider>(null);
	const outProductsSlider2Ref = useRef<SlickSlider>(null);

	const [ourProducts] = useProducts({ type: "our-products" });

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text={t("products.title")} style={{ marginBottom: 24 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 40
				}}
			>
				<h1
					className={fontInter.className}
					style={{
						display: "inline",
						fontSize: 36,
						fontWeight: 600,
						lineHeight: "48px",
						letterSpacing: "0.04em"
					}}
				>
					{t("products.description")}
				</h1>
				<div
					style={{
						display: "flex",
						gap: 8
					}}
				>
					<Button
						type="icon"
						onClick={() => {
							outProductsSlider1Ref?.current?.slickPrev();
							outProductsSlider2Ref?.current?.slickPrev();
						}}
					>
						<Image src={ImageArrow} alt="" />
					</Button>
					<Button
						type="icon"
						onClick={() => {
							outProductsSlider1Ref?.current?.slickNext();
							outProductsSlider2Ref?.current?.slickNext();
						}}
					>
						<Image src={ImageArrow} alt="" style={{ transform: "rotate(180deg)" }} />
					</Button>
				</div>
			</div>
			<Slider
				ref={outProductsSlider1Ref}
				config={{
					className: "carousel",
					arrows: false,
					speed: 600,
					slidesToShow: 4,
					slidesToScroll: 4
				}}
				slides={(ourProducts as TProduct[]).slice(0, 4).map((product) => ({
					key: `our-product-${product.id}`,
					content: (
						<Card product={product} buttons={["wishlist", "view"]} wrapRating={false} />
					)
				}))}
				style={{ marginBottom: 60 }}
			/>
			<Slider
				ref={outProductsSlider2Ref}
				config={{
					className: "carousel",
					arrows: false,
					speed: 600,
					slidesToShow: 4,
					slidesToScroll: 4
				}}
				slides={(ourProducts as TProduct[]).slice(4).map((product) => ({
					key: `our-product-${product.id}`,
					content: (
						<Card product={product} buttons={["wishlist", "view"]} wrapRating={false} />
					)
				}))}
				style={{ marginBottom: 60 }}
			/>
			<Button style={{ alignSelf: "center" }}>{t("products.view")}</Button>
		</section>
	);
};
