"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { fontInter } from "@/app/fonts";

import { TBaseComponent } from "@/types";

import styles from "./Timer.module.css";

interface IRemaining {
	seconds: number;
	minutes: number;
	hours: number;
	days: number;
}

interface IRemainingState extends IRemaining {
	time: number;
}

interface ITimerProps extends TBaseComponent {
	remainingTime?: IRemaining;
	direction?: "forward" | "backward";
	inBanner?: boolean;
}

/** @public */
export const Timer: React.FC<ITimerProps> = ({
	remainingTime = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	},
	direction = "forward",
	inBanner = false,
	style,
	...otherProps
}) => {
	const [remaining, setRemaining] = useState<IRemainingState>({
		...remainingTime,
		time:
			remainingTime.seconds +
			remainingTime.minutes * 60 +
			remainingTime.hours * 3600 +
			remainingTime.days * 86400
	});

	const interval = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		interval.current = setInterval(() => {
			setRemaining((prev) => {
				const time = direction === "forward" ? prev.time + 1 : prev.time - 1;
				const days = Math.floor(time / 86400);
				const hours = Math.floor(time / 3600) - days * 24;
				const minutes = Math.floor(time / 60) - days * 1440 - hours * 60;
				const seconds = time - days * 86400 - hours * 3600 - minutes * 60;

				return {
					...prev,
					time: time,
					days: days,
					hours: hours,
					minutes: minutes,
					seconds: seconds
				};
			});
		}, 1000);

		return () => clearInterval(interval.current);
	}, [remainingTime, direction]);

	const { t } = useTranslation();

	return (
		<div
			style={{
				display: "inline-flex",
				gap: 17,
				...style
			}}
			{...otherProps}
		>
			<span
				className={`${styles.timerStrokeWrapper} ${
					inBanner ? styles.timerStrokeWrapperInBanner : ""
				}`}
				data-label={t("timer.days")}
			>
				<span className={`${styles.timerStroke} ${fontInter.className}`}>
					{`${remaining.days.toString().padStart(2, "0")}`}
				</span>
			</span>
			{!inBanner && <span className={styles.timerSeparator}>:</span>}
			<span
				className={`${styles.timerStrokeWrapper} ${
					inBanner ? styles.timerStrokeWrapperInBanner : ""
				}`}
				data-label={t("timer.hours")}
			>
				<span className={`${styles.timerStroke} ${fontInter.className}`}>
					{`${remaining.hours.toString().padStart(2, "0")}`}
				</span>
			</span>
			{!inBanner && <span className={styles.timerSeparator}>:</span>}
			<span
				className={`${styles.timerStrokeWrapper} ${
					inBanner ? styles.timerStrokeWrapperInBanner : ""
				}`}
				data-label={t("timer.minutes")}
			>
				<span className={`${styles.timerStroke} ${fontInter.className}`}>
					{`${remaining.minutes.toString().padStart(2, "0")}`}
				</span>
			</span>
			{!inBanner && <span className={styles.timerSeparator}>:</span>}
			<span
				className={`${styles.timerStrokeWrapper} ${
					inBanner ? styles.timerStrokeWrapperInBanner : ""
				}`}
				data-label={t("timer.seconds")}
			>
				<span className={`${styles.timerStroke} ${fontInter.className}`}>
					{`${remaining.seconds.toString().padStart(2, "0")}`}
				</span>
			</span>
		</div>
	);
};

/** @alias */
export default Timer;
