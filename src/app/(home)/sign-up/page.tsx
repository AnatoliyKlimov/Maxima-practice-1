import { Metadata } from "next";

import { SignUpSection } from "@/client/sections/auth";

export const metadata: Metadata = {
	title: "Sign Up"
};

export default function SignUpPage() {
	return <SignUpSection />;
}
