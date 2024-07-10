import {
	BannerSection,
	CategoriesSection,
	MenuSection,
	OurProductsSection,
	TodaysSection,
	ThisMonthProductsSection,
	FeaturedSection,
	ServiceSection
} from "@/sections/home";

export default function Home() {
	return (
		<main>
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
