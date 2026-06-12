import { SvelteComponents } from "../../components/svelte.js";
import { ESSENTIALS } from "../../const/essentials.js";
import {
	deleteUnnecessaryFiles,
	modifyCode,
	modifyIndexHtmlConfig,
	modifySvgCode,
	replaceInFile,
	SvelteMainSetup,
} from "../../utils/utils.js";

export function setupSvelte(root: string) {
	const landingComponent = SvelteComponents.Landing;
	const landingCss = SvelteComponents.Appcss;
	SvelteMainSetup(root, ["main.js", "main.ts"]);
	modifyCode(root, ["src"], ["App.svelte"], landingComponent);
	modifyCode(root, ["src"], ["app.css"], landingCss);
	modifySvgCode(root, "public", "vite.svg", "FrameForge.svg", ESSENTIALS.Icon);
	modifyIndexHtmlConfig(root, "index.html");
	deleteUnnecessaryFiles(root, ["src/lib", "src/assets"]);
	replaceInFile(
		root,
		"package.json",
		' "dev": "vite",',
		` "dev": "vite --port ${ESSENTIALS.Port}",`,
	);
}
