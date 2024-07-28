import { Metadata } from "next";

import {
	BannerSection,
	CategoriesSection,
	MenuSection,
	OurProductsSection,
	TodaysSection,
	ThisMonthProductsSection,
	FeaturedSection
} from "@/sections/home";
import { ServiceSection } from "@/sections";

export const metadata: Metadata = {
	title: "Home - Exclusive",
	description: "Exclusive Shop"
};

export default function Home() {
	return (
		<main style={{ paddingBottom: 140 }}>
			<MenuSection />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 80
				}}
			>
				<TodaysSection />
				<CategoriesSection />
				<ThisMonthProductsSection />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 70
				}}
			>
				<BannerSection />
				<OurProductsSection />
			</div>
			<FeaturedSection />
			<ServiceSection />
		</main>
	);
}
