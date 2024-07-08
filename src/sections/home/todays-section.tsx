"use client";

import { useRef } from "react";
import Image from "next/image";
import SlickSlider from "react-slick";

import { fontInter } from "@/app/fonts";
import Slider from "@/components/Slider";
import Timer from "@/lib/ui/components/Timer";
import Caption from "@/lib/ui/components/Caption";
import Button from "@/lib/ui/elements/Button";
import Card from "@/lib/ui/components/Card";

import { DefaultTodaysProducts } from "@/types/__mocks__/product";

import ImageArrow from "@/images/icons/arrow-left.svg";

export const TodaysSection: React.FC = () => {
	const todaysSliderRef = useRef<SlickSlider>(null);

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text="Today's" style={{ marginBottom: 17 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 40
				}}
			>
				<div>
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
						Flash Sales
					</h1>
					<Timer
						remainingTime={{
							days: 3,
							hours: 23,
							minutes: 19,
							seconds: 56
						}}
						direction="backward"
						style={{
							marginLeft: 87
						}}
					/>
				</div>
				<div
					style={{
						display: "flex",
						gap: 8,
						marginBottom: 12
					}}
				>
					<Button
						type="icon"
						onClick={() => {
							todaysSliderRef?.current?.slickPrev();
						}}
					>
						<Image src={ImageArrow} alt="" />
					</Button>
					<Button
						type="icon"
						onClick={() => {
							todaysSliderRef?.current?.slickNext();
						}}
					>
						<Image src={ImageArrow} alt="" style={{ transform: "rotate(180deg)" }} />
					</Button>
				</div>
			</div>
			<Slider
				ref={todaysSliderRef}
				config={{
					className: "carousel",
					arrows: false,
					speed: 600,
					slidesToShow: 4,
					slidesToScroll: 4
				}}
				slides={DefaultTodaysProducts.map((product) => ({
					key: `todays-product-${product.id}`,
					content: <Card product={product} />
				}))}
				style={{
					marginBottom: 60
				}}
			/>
			<Button
				style={{
					alignSelf: "center",
					marginBottom: 60
				}}
			>
				View All Products
			</Button>
			<hr />
		</section>
	);
};
