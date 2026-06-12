import { select } from "@clack/prompts";
import chalk from "chalk";
import { FRAMEWORKS } from "../const/registery.js";
import { makeT, resolveLang } from "../i18n/index.js";
import type { FrameworkId } from "../types/framework.js";

export async function promptFramework(message: string): Promise<FrameworkId> {
	const t = makeT(resolveLang());

	const fw = await select<FrameworkId>({
		initialValue: FRAMEWORKS[0]!.id,
		message: `${chalk.hex("#00d2ff")("")} ${message}`,
		maxItems: FRAMEWORKS.length,
		options: FRAMEWORKS.map((f) => ({
			name: f.label,
			value: f.id,
		})),
	});
	if (typeof fw === "symbol") {
		throw new Error(t("SectionCancelled"));
	}
	return fw;
}
