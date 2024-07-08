"use client";

import { useEffect } from "react";

import { SliderClass, SliderConfig } from "@/lib/vendors/slider";

import "./Slider.css";

type TSlide = {
	key: string;
	content: React.ReactNode;
};

interface ISliderProps {
	config: SliderConfig;
	slides: TSlide[];
}

// TODO: Отрефакторить, чтобы было без использования класса SliderClass
const Slider: React.FC<ISliderProps> = ({ slides, config }) => {
	useEffect(() => {
		window.slider = new SliderClass("slider-container", config);

		return () => {
			if (window.slider) {
				window.slider.destroy();
			}
		};
	}, [config]);

	return (
		<div
			className="slider-section"
			style={{
				padding: "40px 0 0 40px",
				flexGrow: 1
			}}
		>
			<div
				className="slider-container"
				id="slider-container"
				style={{
					height: "100%",
					backgroundColor: "#000",
					color: "#fff"
				}}
			>
				<div className="slider-wrapper">
					{slides.map(({ key, content }) => (
						<div key={key} className="slider-slide">
							{content}
						</div>
					))}
				</div>
				<div className="slider-pagination"></div>
			</div>
		</div>
	);
};

export default Slider;
