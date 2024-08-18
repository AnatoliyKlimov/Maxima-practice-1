import { ChartType, Color, ScriptableContext } from "chart.js";

declare global {
	type TContextFunction<T extends ChartType = "line"> = (context: ScriptableContext<T>) => Color;
}
