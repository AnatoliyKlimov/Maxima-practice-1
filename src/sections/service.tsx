"use client";

import Image from "next/image";

import { useTranslation } from "react-i18next";

import ImageDelivery from "@/images/icons/services/delivery.svg";
import ImageCustomer from "@/images/icons/services/customer.svg";
import ImageMoneyBack from "@/images/icons/services/money-back.svg";

export const ServiceSection: React.FC = () => {
	const { t } = useTranslation();
	return (
		<section
			style={{
				display: "flex",
				justifyContent: "center",
				gap: 88,
				textAlign: "center"
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 24
				}}
			>
				<Image src={ImageDelivery} alt="Delivery" draggable={false} />
				<div>
					<h2
						style={{
							fontSize: 20,
							fontWeight: 600,
							lineHeight: "28px"
						}}
					>
						{t("service.delivery")}
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						{t("service.delivery_description")}
					</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 24
				}}
			>
				<Image src={ImageCustomer} alt="Customer Service" draggable={false} />
				<div>
					<h2
						style={{
							fontSize: 20,
							fontWeight: 600,
							lineHeight: "28px"
						}}
					>
						{t("service.customer")}
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						{t("service.customer_description")}
					</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 24
				}}
			>
				<Image src={ImageMoneyBack} alt="Money Back" draggable={false} />
				<div>
					<h2
						style={{
							fontSize: 20,
							fontWeight: 600,
							lineHeight: "28px"
						}}
					>
						{t("service.garantee")}
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						{t("service.garantee_description")}
					</span>
				</div>
			</div>
		</section>
	);
};
