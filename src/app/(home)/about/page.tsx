import { Metadata } from "next";

import AboutSection from "@/client/sections/about";

export const metadata: Metadata = {
	title: "About"
};

export default function About() {
	return <AboutSection />;
}
