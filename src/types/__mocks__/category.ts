import { v4 as uuid } from "uuid";

import { TCategory } from "@/types";

import IconPhones from "@/images/icons/categories/phones.svg";
import IconComputers from "@/images/icons/categories/computers.svg";
import IconSmartWatch from "@/images/icons/categories/smart-watch.svg";
import IconCamera from "@/images/icons/categories/camera.svg";
import IconHeadPhones from "@/images/icons/categories/headphones.svg";
import IconGaming from "@/images/icons/categories/gaming.svg";

export const DefaultCategories: TCategory[] = [
	{
		id: uuid(),
		titleKey: "categ.phones",
		icon: IconPhones,
		url: "/phones"
	},
	{
		id: uuid(),
		titleKey: "categ.computers",
		icon: IconComputers,
		url: "/computers"
	},
	{
		id: uuid(),
		titleKey: "categ.smartWatch",
		icon: IconSmartWatch,
		url: "/smart-watch"
	},
	{
		id: uuid(),
		titleKey: "categ.camera",
		icon: IconCamera,
		url: "/camera"
	},
	{
		id: uuid(),
		titleKey: "categ.headPhones",
		icon: IconHeadPhones,
		url: "/headphones"
	},
	{
		id: uuid(),
		titleKey: "categ.gaming",
		icon: IconGaming,
		url: "/gaming"
	}
];
