import { ReactComponents as SolidComponents } from "../../components/react.js";
import { ESSENTIALS } from "../../const/essentials.js";
import {
	deleteUnnecessaryFiles,
	modifyCode,
	modifyIndexHtmlConfigSolid,
	modifySvgCode,
	replaceInFile,
} from "../../utils/utils.js";

export function setupSolid(root: string) {
	const landingComponent = SolidComponents.Landing;
	const landingCss = SolidComponents.Appcss;
	const globalCss = SolidComponents.BodyCss;
	modifyCode(root, ["src", "app"], ["App.tsx", "App.jsx"], landingComponent);
	modifyCode(root, ["src"], ["App.css"], landingCss);
	modifyCode(root, ["src"], ["index.css"], globalCss);
	modifySvgCode(root, "public", "vite.svg", "FrameForge.svg", ESSENTIALS.Icon);
	modifyIndexHtmlConfigSolid(root, "index.html");
	deleteUnnecessaryFiles(root, ["src/assets"]);
	replaceInFile(
		root,
		"package.json",
		' "dev": "vite",',
		` "dev": "vite --port ${ESSENTIALS.Port}",`,
	);
}
