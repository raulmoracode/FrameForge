import { ReactComponents } from "../../components/react.js";
import { ESSENTIALS } from "../../const/essentials.js";
import {
	changeFileName,
	deleteUnnecessaryFiles,
	modifyCode,
	modifyIndexHtmlConfig,
	replaceInFile,
} from "../../utils/utils.js";

export function setupReact(root: string) {
	const landingComponent = ReactComponents.Landing;
	const landingCss = ReactComponents.Appcss;
	const globalCss = ReactComponents.BodyCss;
	modifyCode(root, ["src", "app"], ["App.tsx", "App.jsx"], landingComponent);
	changeFileName(root, "src/App.css", "src/App.module.css");
	modifyCode(root, ["src"], ["App.module.css"], landingCss);
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
