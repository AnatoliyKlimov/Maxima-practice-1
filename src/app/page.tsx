import { MenuSection, TodaysSection } from "@/sections/home";

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
			</div>
		</main>
	);
}
