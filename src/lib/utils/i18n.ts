import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enLang from "../../../public/locales/en.json";
import ruLang from "../../../public/locales/ru.json";

const resources = {
	en: {
		translation: enLang
	},
	ru: {
		translation: ruLang
	}
};

const detectionOptions = {
	order: ["localStorage", "navigator"],
	caches: ["localStorage"]
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",
		detection: detectionOptions,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
