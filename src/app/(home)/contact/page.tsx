import { Metadata } from "next";

import ContactSection from "@/client/sections/contact";
import Breadcrumb from "@/client/components/Breadcrumb";

export const metadata: Metadata = {
	title: "Contact"
};

export default function Contact() {
	return (
		<main
			style={{
				gap: 0
			}}
		>
			<Breadcrumb />
			<ContactSection />
		</main>
	);
}
