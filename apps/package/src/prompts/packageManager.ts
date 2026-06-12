import { select } from "@clack/prompts";
import chalk from "chalk";
import { PACKET_MANAGER } from "../const/packetManager.js";
import { makeT, resolveLang } from "../i18n/index.js";
import type { PackageManager } from "../types/framework.js";

export async function promptPackageManager(
	message: string,
): Promise<PackageManager> {
	const t = makeT(resolveLang());
	const pm = await select<PackageManager>({
		initialValue: PACKET_MANAGER[0]!.value as PackageManager,
		message: `${chalk.hex("#00d2ff")("")} ${message}`,
		maxItems: PACKET_MANAGER.length,
		options: PACKET_MANAGER.map((f) => ({
			label: f.name,
			value: f.value as PackageManager,
		})),
	});

	if (typeof pm === "symbol") {
		throw new Error(t("SectionCancelled"));
	}
	return pm;
}
