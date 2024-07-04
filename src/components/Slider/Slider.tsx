"use client";

import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.css";

type TSlide = {
	key: string;
	content: React.ReactNode;
};

interface ISliderProps {
	slides: TSlide[];
}

const Slider: React.FC<ISliderProps> = ({ slides }) => {
	const config = {
		arrows: false,
		speed: 600,
		autoplay: true,
		autoplaySpeed: 6000,
		dots: true,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<div
			className="slider-section"
			style={{
				padding: "40px 0 0 40px",
				width: "calc(1170px - 217px - 16px - 1px)"
			}}
		>
			<SlickSlider {...config}>
				{slides.map(({ key, content }) => (
					<div key={key}>{content}</div>
				))}
			</SlickSlider>
		</div>
	);
};

export default Slider;
