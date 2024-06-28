import { Poppins, Inter } from "next/font/google";

export const fontPoppins = Poppins({
	weight: [ "400", "500" ],
	subsets: ["latin"]
});

export const fontInter = Inter({
	weight: "800",
	subsets: ["latin"]
});
