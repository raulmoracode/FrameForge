import path from "node:path";
import { editFile, updateReactCompilerReadme } from "../utils/utils.js";

export function setupReactCompiler(root: string, isTs: boolean) {
	const reactCompilerPluginVersion = "1.0.0";

	editFile(path.resolve(root, "package.json"), (content) => {
		const asObject = JSON.parse(content);
		const devDepsEntries = Object.entries(asObject.devDependencies);
		devDepsEntries.push([
			"babel-plugin-react-compiler",
			`^${reactCompilerPluginVersion}`,
		]);
		devDepsEntries.sort();
		asObject.devDependencies = Object.fromEntries(devDepsEntries);
		return `${JSON.stringify(asObject, null, 2)}\n`;
	});
	editFile(
		path.resolve(root, `vite.config.${isTs ? "ts" : "js"}`),
		(content) => {
			return content.replace(
				"  plugins: [react()],",
				`  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],`,
			);
		},
	);
	updateReactCompilerReadme(
		root,
		"The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.\n\nNote: This will impact Vite dev & build performances.",
	);
}
