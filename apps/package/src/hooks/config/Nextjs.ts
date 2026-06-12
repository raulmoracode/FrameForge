import { NextjsComponents } from "../../components/nextjs.js";
import { ESSENTIALS } from "../../const/essentials.js";
import {
	deleteUnnecessaryFiles,
	editLayoutNextjs,
	modifyCode,
	replaceInFile,
} from "../../utils/utils.js";

export function setupNextjs(root: string) {
	const landingComponent = NextjsComponents.Landing;
	const layoutComponent = NextjsComponents.Layout;
	editLayoutNextjs(root, layoutComponent);
	modifyCode(
		root,
		["src/app", "app"],
		["page.tsx", "page.jsx"],
		landingComponent,
	);
	replaceInFile(
		root,
		"package.json",
		"next dev",
		`next dev -p ${ESSENTIALS.Port}`,
	);
	deleteUnnecessaryFiles(root, [
		"public/file.svg",
		"public/globe.svg",
		"public/next.svg",
		"public/window.svg",
		"src/app/favicon.ico",
		"src/app/vercel.svg",
	]);
}
