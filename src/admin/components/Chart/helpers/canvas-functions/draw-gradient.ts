import { ChartArea } from "chart.js";

export type TGradientColors = {
	offset: number;
	color: string;
}[];

let gradient: CanvasGradient;

export const drawGradient = (
	ctx: CanvasRenderingContext2D,
	chartArea: ChartArea,
	colors: TGradientColors
): CanvasGradient => {
	gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
	colors.forEach((color) => gradient.addColorStop(color.offset, color.color));

	return gradient;
};
