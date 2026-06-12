import type { FrameworkId, Variant } from "../types/framework.js";

export const VARIANTS: Partial<Record<FrameworkId, Variant[]>> = {
	react: [
		{ label: "React + TypeScript", value: "react-ts" },
		{ label: "React + TypeScript + SWC", value: "react-swc-ts" },
		{
			label: "React + TypeScript + React Compiler",
			value: "hook:react-compiler-ts:react-ts",
		},
		{ label: "React + JavaScript", value: "react" },
		{ label: "React + JavaScript + SWC", value: "react-swc" },
		{
			label: "React + JavaScript + React Compiler",
			value: "hook:react-compiler:react",
		},
	],
	nextjs: [
		{
			label: "Recommended defaults (TS + Tailwind + ESLint + App Router)",
			value:
				"--typescript --tailwind --eslint --app --src-dir --no-import-alias --no-react-compiler",
		},
		{
			label: "Empty Next.js app",
			value: "--empty",
		},
	],
};

export const FUTURE_VARIANTS: Partial<Record<FrameworkId, Variant[]>> = {
	vue: [
		{ label: "Vue + TypeScript", value: "vue-ts" },
		{ label: "Vue + JavaScript", value: "vue" },
		{
			label: "Official Vue Starter (create-vue)",
			value: "custom:vue-starter",
		},
		{ label: "Nuxt", value: "custom:nuxt" },
		{ label: "Vike (SSR framework)", value: "custom:vike-vue" },
	],
	svelte: [
		{ label: "Svelte + TypeScript", value: "svelte-ts" },
		{ label: "Svelte + JavaScript", value: "svelte" },
	],
	solid: [
		{ label: "Solid + TypeScript", value: "solid-ts" },
		{ label: "Solid + JavaScript", value: "solid" },
	],
	preact: [
		{ label: "Preact + TypeScript", value: "preact-ts" },
		{ label: "Preact + JavaScript", value: "preact" },
	],
};

export function getVariants(framework: FrameworkId): Variant[] {
	return VARIANTS[framework] ?? [];
}
