#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { intro, outro } from "@clack/prompts";
import chalk from "chalk";
import { Command } from "commander";
import gradient from "gradient-string";
import ora from "ora";
import { buildCommand } from "./frameworks/buildCommand.js";
import { makeT } from "./i18n/index.js";
import { hasInternet } from "./internet.js";
import { promptFramework } from "./prompts/framework.js";
import { promptVariant } from "./prompts/frameworkVariant.js";
import { chooseLang } from "./prompts/languageSelector.js";
import { promptPackageManager } from "./prompts/packageManager.js";
import { promptProjectName } from "./prompts/projectName.js";
import { runNative } from "./tools/native.js";

const url = fileURLToPath(import.meta.url);
const __dirname = dirname(url);
const pkg = JSON.parse(
	readFileSync(resolve(__dirname, "..", "package.json"), "utf-8"),
);

const ffGradient = gradient(["#001A72", "#003BFF", "#007BFF", "#66CCFF"]);

const accentGradient = gradient(["#003BFF", "#66CCFF"]);

function banner(): void {
	const art = `
    ███████╗██████╗  █████╗ ███╗   ███╗███████╗
    ██╔════╝██╔══██╗██╔══██╗████╗ ████║██╔════╝
    █████╗  ██████╔╝███████║██╔████╔██║█████╗
    ██╔══╝  ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝
    ██║     ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗
    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
    ███████╗ ██████╗ ██████╗  ██████╗ ███████╗
    ██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
    █████╗  ██║   ██║██████╔╝██║  ███╗█████╗
    ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝
    ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝`;

	console.log();
	console.log(ffGradient.multiline(art));
	console.log();
	console.log(
		`                                          ${chalk.bgHex("#003BFF").white.bold(` v${pkg.version} `)}`,
	);
	console.log();
}

function separator(): void {
	console.log(
		chalk.hex("#1E40AF")("  ─────────────────────────────────────────────"),
	);
}

const program = new Command();

program
	.name("create-frameforge")
	.version(pkg.version, "-v, --version")
	.option("--lang <lang>", "Language: en | es");

async function main() {
	program.parse(process.argv);
	const opts = program.opts<{ lang?: string }>();

	banner();

	intro("FrameForge CLI");
	const lang = await chooseLang(opts.lang);
	const t = makeT(lang);

	const projectName = (await promptProjectName(t("projectName"))).trim();

	const pm = await promptPackageManager(t("selectPackageManager"));

	const framework = await promptFramework(t("selectFramework"));

	const variant = await promptVariant(t("selectVariant"), framework);

	outro("FrameForge CLI");

	const s = ora(t("checkingConnection")).start();

	const online = await hasInternet();

	if (online) {
		s.succeed(chalk.green.bold(t("online")));
		console.log();

		const built = buildCommand({ pm, framework, projectName, variant });
		console.log(
			`  ${chalk.hex("#7b2ff7")("❯")} ${chalk.dim(built.command.cmd)} ${chalk.white(built.command.args.join(" "))}`,
		);
		console.log();

		separator();
		console.log();

		await runNative(built.command);

		if (built.postHook) {
			const projectRoot = resolve(process.cwd(), projectName);
			const hookSpinner = ora(t("applyingHooks")).start();
			built.postHook(projectRoot);
			hookSpinner.succeed(chalk.green(t("hooksApplied")));
		}

		console.log();
		separator();
		console.log(
			`  ${chalk.hex("#ff5858")("♥")} ${chalk.gray("Thanks for using")} ${accentGradient("FrameForge")}${chalk.gray("!")}`,
		);
		separator();
		console.log();
		return;
	}

	s.fail(chalk.yellow.bold(t("offline")));
	console.log();
	process.exitCode = 2;
}

main().catch((err) => {
	if (
		err instanceof Error &&
		(err.message.includes("User force closed") ||
			err.message.includes("prompt was canceled"))
	) {
		console.log(
			`\n  ${chalk.hex("#ff5858")("●")} ${chalk.dim("Cancelled. See you next time! 👋")}\n`,
		);
		process.exit(0);
	}

	console.error(
		chalk.red(
			`\n  ${chalk.red.bold("✖ Error:")} ${chalk.red(err instanceof Error ? err.message : String(err))}\n`,
		),
	);
	process.exit(1);
});
