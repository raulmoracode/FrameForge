import { select } from "@clack/prompts";
import chalk from "chalk";
import { VARIANTS } from "../const/variants.js";
import { makeT, resolveLang } from "../i18n/index.js";
import type { FrameworkId } from "../types/framework.js";

export async function promptVariant(
	message: string,
	framework: FrameworkId,
): Promise<string | null> {
	const t = makeT(resolveLang());
	const template = await select<string>({
		message: `${chalk.hex("#00d2ff")("")} ${message}`,
		initialValue: VARIANTS[framework]?.[0]?.value,
		maxItems: VARIANTS[framework]?.length,
		options: (VARIANTS[framework] || []).map((v) => ({
			label: v.label,
			value: v.value,
		})),
	});
	if (typeof template === "symbol") {
		throw new Error(t("SectionCancelled"));
	}
	return template;
}
