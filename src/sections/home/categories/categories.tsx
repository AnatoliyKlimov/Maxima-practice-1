"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SlickSlider from "react-slick";

import { fontInter } from "@/app/fonts";
import Slider from "@/components/Slider";
import Caption from "@/lib/ui/components/Caption";
import Button from "@/lib/ui/elements/Button";

import { DefaultCategories } from "@/types/__mocks__";

import ImageArrow from "@/images/icons/arrow-left.svg";

import styles from "./categories.module.css";

export const CategoriesSection: React.FC = () => {
	const categoriesSliderRef = useRef<SlickSlider>(null);

	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column"
			}}
		>
			<Caption text="Categories" style={{ marginBottom: 17 }} />
			<div
				style={{
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					marginBottom: 60
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
						Browse By Category
					</h1>
				</div>
				<div
					style={{
						display: "flex",
						gap: 8
					}}
				>
					<Button
						type="icon"
						onClick={() => {
							categoriesSliderRef?.current?.slickPrev();
						}}
					>
						<Image src={ImageArrow} alt="" />
					</Button>
					<Button
						type="icon"
						onClick={() => {
							categoriesSliderRef?.current?.slickNext();
						}}
					>
						<Image src={ImageArrow} alt="" style={{ transform: "rotate(180deg)" }} />
					</Button>
				</div>
			</div>
			<Slider
				ref={categoriesSliderRef}
				config={{
					className: "carousel",
					arrows: false,
					speed: 600,
					slidesToShow: 6,
					slidesToScroll: 6
				}}
				slides={DefaultCategories.map((category) => ({
					key: `categories-${category.id}`,
					content: (
						<Link href={category.url} className="no-hover-link">
							<div
								className={styles.category}
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									gap: 16,
									height: 145,
									width: 170,
									borderRadius: 4
								}}
							>
								<Image
									src={category.icon}
									alt={category.title}
									style={{
										height: 56,
										width: 56
									}}
								/>
								<span style={{ lineHeight: "24px" }}>{category.title}</span>
							</div>
						</Link>
					)
				}))}
				style={{ marginBottom: 70 }}
			/>
			<hr />
		</section>
	);
};
