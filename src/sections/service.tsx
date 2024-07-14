import Image from "next/image";

import ImageDelivery from "@/images/icons/services/delivery.svg";
import ImageCustomer from "@/images/icons/services/customer.svg";
import ImageMoneyBack from "@/images/icons/services/money-back.svg";

export const ServiceSection: React.FC = () => {
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
						FREE AND FAST DELIVERY
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						Free delivery for all orders over $140
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
						24/7 CUSTOMER SERVICE
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						Friendly 24/7 customer support
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
						MONEY BACK GUARANTEE
					</h2>
					<span
						style={{
							fontSize: 14,
							fontWeight: 400,
							lineHeight: "21px"
						}}
					>
						We return money within 30 days
					</span>
				</div>
			</div>
		</section>
	);
};
