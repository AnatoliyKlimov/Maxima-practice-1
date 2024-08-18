import { ChartDataset, ChartType } from "chart.js";

export const makeDataset = <T extends ChartType = "line">(data: ChartDataset<T>) => ({
	fill: false,
	pointStyle: false,
	borderWidth: 2,
	borderCapStyle: "round",
	tension: 0.4,
	...data
});
