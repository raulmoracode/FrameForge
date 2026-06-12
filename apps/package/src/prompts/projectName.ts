import { text } from "@clack/prompts";
import chalk from "chalk";
import { makeT, resolveLang } from "../i18n/index.js";

export async function promptProjectName(message: string): Promise<string> {
	const t = makeT(resolveLang());
	const name = await text({
		message: `${chalk.hex("#00d2ff")("")} ${message}`,
		placeholder: t("projectPlaceHolder"),
		validate(value) {
			if (!value || value.trim().length === 0) {
				return t("projectNameInvalid");
			}
		},
	});
	if (typeof name === "symbol") {
		throw new Error(t("SectionCancelled"));
	}
	return name;
}
