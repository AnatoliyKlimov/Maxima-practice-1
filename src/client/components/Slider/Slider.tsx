"use client";

import { forwardRef } from "react";
import SlickSlider, { Settings } from "react-slick";

import { TBaseComponent } from "@/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

type TSlide = {
	key: string;
	content: React.ReactNode;
};

interface ISliderProps extends TBaseComponent {
	config: Settings;
	slides: TSlide[];
}

/** @public */
export const Slider = forwardRef<SlickSlider, ISliderProps>(
	({ slides, config, ...otherProps }, ref) => {
		return (
			<div className="slider-section" {...otherProps}>
				<SlickSlider {...config} ref={ref}>
					{slides.map(({ key, content }) => (
						<div key={key}>{content}</div>
					))}
				</SlickSlider>
			</div>
		);
	}
);

Slider.displayName = "Slider";

/** @alias */
export default Slider;
