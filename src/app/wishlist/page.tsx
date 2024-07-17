import { Metadata } from "next";

import { WishlistSection, JustForYouSection } from "@/sections/wishlist";

export const metadata: Metadata = {
	title: "Wishlist - Exclusive",
	description: "Exclusive Shop"
};

export default function WishlistPage() {
	return (
		<main
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 80,
				paddingTop: 80,
				paddingBottom: 140
			}}
		>
			<WishlistSection />
			<JustForYouSection />
		</main>
	);
}
