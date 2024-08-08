import { Metadata } from "next";

import { homeSections, ServiceSection } from "@/client/sections";

const {
	BannerSection,
	CategoriesSection,
	MenuSection,
	OurProductsSection,
	TodaysSection,
	ThisMonthProductsSection,
	FeaturedSection
} = homeSections;

export const metadata: Metadata = {
	title: "Home"
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
