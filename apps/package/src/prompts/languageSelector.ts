import { select } from "@clack/prompts";
import chalk from "chalk";
import { LANGUAGES } from "../const/languages.js";
import { type Lang, makeT, resolveLang, setLang } from "../i18n/index.js";

export async function chooseLang(cliLang?: string): Promise<Lang> {
	const t = makeT(resolveLang());
	const forced = (cliLang || "").toLowerCase();
	if (forced === "en" || forced === "es") {
		setLang(forced);
		return forced;
	}
	const detected = resolveLang();
	const lang = await select<Lang>({
		message: `${chalk.hex("#00d2ff")("🌍")} `,
		initialValue: detected,
		maxItems: LANGUAGES.length,
		options: LANGUAGES.map((v) => ({
			label: v.label,
			value: v.value,
		})),
	});
	if (typeof lang === "symbol") {
		throw new Error(t("SectionCancelled"));
	}
	setLang(lang);
	return lang;
}
