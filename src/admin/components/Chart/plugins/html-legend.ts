import { Plugin } from "chart.js";

/** @public */
export const htmlLegendPlugin: (id: string) => Plugin = (id) => ({
	id,
	afterUpdate(chart) {
		const wrapper = document.getElementById(id);

		if (wrapper?.children.length && wrapper?.children.length > 0) return;

		const labels = chart.options.plugins?.legend?.labels;

		if (labels) {
			const items = labels.generateLabels?.(chart);
			const ul = document.createElement("ul");

			items?.forEach(({ text, fillStyle }) => {
				const li = document.createElement("li");
				const point = document.createElement("div");
				const span = document.createElement("span");

				li.style.display = "inline-flex";
				li.style.alignItems = "center";
				li.style.gap = "4px";
				li.style.marginRight = "18px";

				point.style.width = "8px";
				point.style.height = "8px";
				point.style.borderRadius = "50%";
				point.style.backgroundColor = fillStyle as string;

				span.appendChild(document.createTextNode(text));
				li.appendChild(point);
				li.appendChild(span);
				ul.appendChild(li);
			});

			document.getElementById(id)?.appendChild(ul);
		}
	}
});

/** @alias */
export default htmlLegendPlugin;
