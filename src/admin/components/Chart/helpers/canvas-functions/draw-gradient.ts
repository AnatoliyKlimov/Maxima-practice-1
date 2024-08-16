import { ChartArea } from "chart.js";

export type TGradientColors = {
	offset: number;
	color: string;
}[];

let width: number, height: number, gradient: CanvasGradient;

export const drawGradient = (
	ctx: CanvasRenderingContext2D,
	chartArea: ChartArea,
	colors: TGradientColors
): CanvasGradient => {
	const chartWidth = chartArea.right - chartArea.left;
	const chartHeight = chartArea.bottom - chartArea.top;

	if (!gradient || width !== chartWidth || height !== chartHeight) {
		width = chartWidth;
		height = chartHeight;

		gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);

		colors.forEach((color) => gradient.addColorStop(color.offset, color.color));
	}

	return gradient;
};
