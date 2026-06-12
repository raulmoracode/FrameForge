import { en } from "./en.js";
import { es } from "./es.js";

export type Lang = "en" | "es";
type Dict = typeof en;

const DICTS: Record<Lang, Dict> = { en, es };

let currentLang: Lang | undefined;

export function setLang(lang: Lang) {
	currentLang = lang;
}

export function getLang(): Lang | undefined {
	return currentLang;
}

export function resolveLang(): Lang {
	const lang = getLang();
	if (lang) return lang;

	const env = (process.env.FRAMEFORGE_LANG || "").toLowerCase();
	if (env === "es") return "es";
	if (env === "en") return "en";

	const sys = (process.env.LANG || "").toLowerCase();
	if (sys.startsWith("es")) return "es";
	return "en";
}

export function makeT(lang: Lang) {
	const dict = DICTS[lang];
	return function t<K extends keyof Dict>(key: K): Dict[K] {
		return dict[key];
	};
}
