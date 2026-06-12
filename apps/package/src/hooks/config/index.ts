import {
	setupNextjs,
	setupPreact,
	setupReact,
	setupSolid,
	setupSvelte,
} from "../../exports/exports-config.js";

export const LANDING_HOOKS: Record<
	string,
	(root: string, isTs: boolean) => void
> = {
	nextjs: setupNextjs,
	react: setupReact,
	svelte: setupSvelte,
	solid: setupSolid,
	preact: setupPreact,
};
