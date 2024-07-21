import { v4 as uuid } from "uuid";

import { TCategory } from "@/types";

import IconPhones from "@/images/icons/categories/phones.svg";
import IconComputers from "@/images/icons/categories/computers.svg";
import IconSmartWatch from "@/images/icons/categories/smart-watch.svg";
import IconCamera from "@/images/icons/categories/camera.svg";
import IconHeadPhones from "@/images/icons/categories/headphones.svg";
import IconGaming from "@/images/icons/categories/gaming.svg";
import i18next from "i18next";

export const DefaultCategories: TCategory[] = [
	{
		id: uuid(),
		title: "Phones",
		icon: IconPhones,
		url: "/phones"
	},
	{
		id: uuid(),
		title: "Computers",
		icon: IconComputers,
		url: "/computers"
	},
	{
		id: uuid(),
		title: "SmartWatch",
		icon: IconSmartWatch,
		url: "/smart-watch"
	},
	{
		id: uuid(),
		title: "Camera",
		icon: IconCamera,
		url: "/camera"
	},
	{
		id: uuid(),
		title: "HeadPhones",
		icon: IconHeadPhones,
		url: "/headphones"
	},
	{
		id: uuid(),
		title: "Gaming",
		icon: IconGaming,
		url: "/gaming"
	}
];
