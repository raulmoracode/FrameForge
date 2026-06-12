export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export type FrameworkId =
	| "react"
	| "nextjs"
	| "svelte"
	| "solid"
	| "angular"
	| "vue"
	| "astro"
	| "preact";

export interface Variant {
	label: string;
	value: string;
}

export interface BuildOpts {
	pm: PackageManager;
	framework: FrameworkId;
	projectName: string;
	variant?: string | null;
}

export interface FrameworkDef {
	strategy: "create" | "dlx";
	pkg: string;
	sub?: string;
	npmSeparator?: boolean;
	extraArgs?: (variant: string | null | undefined) => string[];
	defaultVariant?: string;
}

export interface Framework {
	id: FrameworkId;
	label: string;
}

export interface BuiltCommand {
	cmd: string;
	args: string[];
}
