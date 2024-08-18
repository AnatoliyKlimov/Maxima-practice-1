"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Filler,
	ChartType,
	ChartOptions,
	ChartData,
	ScaleOptions,
	Plugin
} from "chart.js";
import { Line } from "react-chartjs-2";

import { Flex } from "antd";

import { htmlLegendPlugin } from "./plugins";

import { fontPublicSans } from "@/app/fonts";
import type { TBaseComponent } from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Filler);

ChartJS.defaults.font.family = fontPublicSans.style.fontFamily;
ChartJS.defaults.font.size = 12;

interface IChartProps extends TBaseComponent {
	type: ChartType;
	labelsX?: ChartData["labels"];
	datasets: ChartData["datasets"];
	hasLegend?: boolean;
	hasGrid?: boolean;
	hasTicks?: boolean;
	limitsY?: {
		min?: ScaleOptions["min"];
		max?: ScaleOptions["max"];
	};
}

/** @public */
export const Chart: React.FC<IChartProps> = ({
	id,
	type,
	labelsX,
	datasets,
	hasLegend = true,
	hasGrid = false,
	hasTicks = false,
	limitsY,
	style
}) => {
	const options: ChartOptions<typeof type> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: { display: false },
			legend: {
				display: false,
				align: "start",
				position: "top",
				labels: {
					padding: 18,
					usePointStyle: true,
					pointStyle: "circle",
					boxWidth: 8,
					boxHeight: 6,
					generateLabels: (chart) =>
						chart.data.datasets.map((dataset, i) => ({
							datasetIndex: i,
							text: dataset.label as string,
							fillStyle: dataset.borderColor as string,
							hidden: chart.getDatasetMeta(i).hidden
						}))
				}
			}
		},
		scales: {
			x: {
				grid: {
					display: hasGrid
				},
				border: {
					display: false
				},
				ticks: {
					display: hasTicks
				}
			},
			y: {
				grid: {
					display: hasGrid
				},
				border: {
					display: false
				},
				ticks: {
					display: hasTicks
				},
				min: limitsY?.min,
				max: limitsY?.max
			}
		}
	};

	const data: ChartData<typeof type> = {
		labels: labelsX || datasets[0].data.map((data) => data),
		datasets
	};

	const plugins: Plugin<typeof type>[] = [];

	if (hasLegend) plugins.push(htmlLegendPlugin(`${id}-chart-legend`));

	const renderChart = () => {
		switch (type) {
			case "line":
				return (
					<>
						<Line
							options={options as ChartOptions<"line">}
							data={data as ChartData<"line">}
							plugins={plugins}
							redraw={true}
						/>
						{labelsX && (
							<Flex justify="space-between" style={{ padding: "0 6px" }}>
								{labelsX.map((label, i) => (
									<span
										key={`chart-label-x-${i}`}
										style={{
											fontSize: 12,
											fontWeight: 500,
											color: "var(--foreground-semi)"
										}}
									>
										{label as string}
									</span>
								))}
							</Flex>
						)}
					</>
				);

			default:
				return null;
		}
	};

	return (
		<div style={{ position: "relative", ...style }}>
			<div id={`${id}-chart-legend`}></div>
			{renderChart()}
		</div>
	);
};

/** @alias */
export default Chart;
