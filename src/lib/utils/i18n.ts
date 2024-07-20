import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: "en",
		lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
		// you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
		// if you're using a language detector, do not define the lng option

		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
