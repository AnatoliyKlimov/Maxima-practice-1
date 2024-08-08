import { Metadata } from "next";

import { WishlistSection, JustForYouSection } from "@/client/sections/wishlist";

export const metadata: Metadata = {
	title: "Wishlist"
};

export default function WishlistPage() {
	return (
		<main
			style={{
				gap: 80,
				marginTop: 80,
				marginBottom: 140
			}}
		>
			<WishlistSection />
			<JustForYouSection />
		</main>
	);
}
