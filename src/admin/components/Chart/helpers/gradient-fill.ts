import { ChartType } from "chart.js";

import { drawGradient, TGradientColors } from "./canvas-functions";

export const gradientFill: <T extends ChartType = "line">(
	colors: TGradientColors
) => TContextFunction<T> = (colors) => (context) => {
	const { ctx, chartArea } = context.chart;

	if (!chartArea) return "";

	return drawGradient(ctx, chartArea, colors);
};
