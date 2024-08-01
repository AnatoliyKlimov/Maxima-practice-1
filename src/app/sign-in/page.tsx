import { Metadata } from "next";

import { SignInSection } from "@/client/sections/auth";

export const metadata: Metadata = {
	title: "Sign In"
};

export default function SignInPage() {
	return <SignInSection />;
}
