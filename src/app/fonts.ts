import { Inter, Open_Sans, Public_Sans } from "next/font/google";

export const fontOpenSans = Open_Sans({
	weight: ["400", "500"],
	subsets: ["latin", "cyrillic"]
});

export const fontPublicSans = Public_Sans({
	weight: ["400", "500", "800"],
	subsets: ["latin"]
});

export const fontInter = Inter({
	weight: ["600", "700", "800"],
	subsets: ["latin", "cyrillic"]
});
