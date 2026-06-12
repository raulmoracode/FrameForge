import { ReactComponents as PreactComponents } from "../../components/react.js";
import { ESSENTIALS } from "../../const/essentials.js";
import {
	deleteUnnecessaryFiles,
	modifyCode,
	modifyIndexHtmlConfig,
	replaceInFile,
} from "../../utils/utils.js";

export function setupPreact(root: string) {
	const landingComponent = PreactComponents.Landing;
	const landingCss = PreactComponents.Appcss;
	const globalCss = PreactComponents.BodyCss;
	modifyCode(root, ["src", "app"], ["app.tsx", "app.jsx"], landingComponent);
	modifyCode(root, ["src"], ["app.css"], landingCss);
	modifyCode(root, ["src"], ["index.css"], globalCss);
	modifyIndexHtmlConfig(root, "index.html");
	deleteUnnecessaryFiles(root, ["src/assets"]);
	replaceInFile(
		root,
		"package.json",
		' "dev": "vite",',
		` "dev": "vite --port ${ESSENTIALS.Port}",`,
	);
}
