import { LANDING_HOOKS } from "../hooks/config/index.js";
import { REACT_COMPILER_VARIANTS } from "../hooks/index.js";
import type {
	BuildOpts,
	BuiltCommand,
	FrameworkDef,
	FrameworkId,
	PackageManager,
} from "../types/framework.js";

function dlx(pm: PackageManager): { cmd: string; args: string[] } {
	switch (pm) {
		case "npm":
			return { cmd: "npx", args: [] };
		case "pnpm":
			return { cmd: "pnpm", args: ["dlx"] };
		case "yarn":
			return { cmd: "yarn", args: ["dlx"] };
		case "bun":
			return { cmd: "bunx", args: [] };
	}
}

function create(pm: PackageManager): { cmd: string; args: string[] } {
	return { cmd: pm, args: ["create"] };
}

const VITE_TEMPLATE = (
	defaultTpl: string,
): Pick<FrameworkDef, "extraArgs" | "defaultVariant" | "npmSeparator"> => ({
	npmSeparator: true,
	defaultVariant: defaultTpl,
	extraArgs: (v) => ["--template", v ?? defaultTpl],
});

const DEFS: Record<FrameworkId, FrameworkDef> = {
	nextjs: {
		strategy: "dlx",
		pkg: "create-next-app@latest",
		extraArgs: (v) =>
			v ? v.split(" ") : ["--typescript", "--tailwind", "--eslint", "--app"],
	},
	react: {
		strategy: "create",
		pkg: "vite@6",
		...VITE_TEMPLATE("react-ts"),
	},
	vue: { strategy: "create", pkg: "vite@6", ...VITE_TEMPLATE("vue-ts") },
	svelte: {
		strategy: "create",
		pkg: "vite@6",
		...VITE_TEMPLATE("svelte-ts"),
	},
	solid: {
		strategy: "create",
		pkg: "vite@6",
		...VITE_TEMPLATE("solid-ts"),
	},
	preact: { strategy: "create", pkg: "vite@6", ...VITE_TEMPLATE("preact-ts") },
	angular: { strategy: "dlx", pkg: "@angular/cli@latest", sub: "new" },
	astro: { strategy: "create", pkg: "astro@latest", npmSeparator: true },
};

const CUSTOM_COMMANDS: Record<
	string,
	(pm: PackageManager, projectName: string) => BuiltCommand
> = {
	"vue-starter": (pm, projectName) => {
		const base = dlx(pm);
		return {
			cmd: base.cmd,
			args: [...base.args, "create-vue@latest", "init", projectName],
		};
	},
	nuxt: (pm, projectName) => {
		const base = dlx(pm);
		if (pm === "npm" || pm === "pnpm" || pm === "bun") {
			return {
				cmd: base.cmd,
				args: [...base.args, "nuxt@latest", "init", projectName],
			};
		} else {
			return {
				cmd: base.cmd,
				args: [...base.args, "nuxt", "init", projectName],
			};
		}
	},
	"vike-vue": (pm, projectName) => {
		const base = create(pm);
		const separator = pm === "npm" ? ["--"] : [];
		return {
			cmd: base.cmd,
			args: [...base.args, "vike@latest", ...separator, "--vue", projectName],
		};
	},
};

export function buildCommand(opts: BuildOpts): {
	command: BuiltCommand;
	postHook?: (root: string) => void;
} {
	const def = DEFS[opts.framework];
	if (!def) throw new Error(`Unsupported framework: ${opts.framework}`);

	if (opts.variant?.startsWith("custom:")) {
		const customKey = opts.variant.slice("custom:".length);
		const builder = CUSTOM_COMMANDS[customKey];
		if (!builder) throw new Error(`Unknown custom command: ${customKey}`);
		return { command: builder(opts.pm, opts.projectName) };
	}

	let realVariant = opts.variant;
	let postHook: ((root: string) => void) | undefined;

	if (opts.variant?.startsWith("hook:")) {
		const fullKey = opts.variant;

		const parts = fullKey.split(":");

		realVariant = parts[2];

		postHook = REACT_COMPILER_VARIANTS[fullKey];

		const landingHook = LANDING_HOOKS[opts.framework];

		if (landingHook) {
			const isTs = realVariant?.endsWith("ts") ?? true;

			postHook = (root: string) => landingHook(root, isTs);
		}
	}

	const landingHook = LANDING_HOOKS[opts.framework];

	if (!postHook && landingHook) {
		const isTs = realVariant?.endsWith("ts") ?? true;

		postHook = (root: string) => landingHook(root, isTs);
	}
	const pkg =
		opts.pm === "yarn" && def.strategy === "create"
			? def.pkg.replace(/@[^@]+$/, "")
			: def.pkg;

	const extra = def.extraArgs?.(realVariant) ?? [];

	const base = def.strategy === "create" ? create(opts.pm) : dlx(opts.pm);

	const separator =
		def.npmSeparator && opts.pm === "npm" && def.strategy === "create"
			? ["--"]
			: [];

	const sub = def.sub ? [def.sub] : [];

	return {
		command: {
			cmd: base.cmd,
			args: [
				...base.args,
				pkg,
				...sub,
				opts.projectName,
				...separator,
				...extra,
			],
		},
		postHook,
	};
}
