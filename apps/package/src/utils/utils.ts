import fs from "node:fs";
import path from "node:path";
import { ESSENTIALS } from "../const/essentials.js";

/**
 * Edits a file by reading its content and overwriting it with the result of a callback.
 * @param {string} file - Absolute path to the file to edit.
 * @param {(content: string) => string} callback - Function that receives the current content and returns the new content.
 */
export function editFile(file: string, callback: (content: string) => string) {
	const content = fs.readFileSync(file, "utf-8");
	fs.writeFileSync(file, callback(content), "utf-8");
}

/**
 * Updates the "React Compiler" section in the project's README.md.
 * @param {string} root - Project root path.
 * @param {string} newBody - New content for the compiler section.
 */
export function updateReactCompilerReadme(root: string, newBody: string) {
	editFile(path.resolve(root, `README.md`), (content) => {
		const h2Start = content.indexOf("## React Compiler");
		const bodyStart = content.indexOf("\n\n", h2Start);
		const compilerSectionEnd = content.indexOf("\n## ", bodyStart);
		if (h2Start === -1 || bodyStart === -1 || compilerSectionEnd === -1) {
			console.warn("Could not update compiler section in README.md");
			return content;
		}
		return content.replace(
			content.slice(bodyStart + 2, compilerSectionEnd - 1),
			newBody,
		);
	});
}

/**
 * Searches and replaces the content of a specific file in the given directories.
 * @param {string} root - Project root path.
 * @param {string[]} searchDirs - Directories to search for the files.
 * @param {string[]} fileNames - File names to look for.
 * @param {string} newComponent - New content to overwrite the file with.
 * @returns {boolean} - True if a file was found and modified, false otherwise.
 */
export function modifyCode(
	root: string,
	searchDirs: string[],
	fileNames: string[],
	newComponent: string,
) {
	let found = false;
	for (const dir of searchDirs) {
		for (const fileName of fileNames) {
			const filePath = path.resolve(root, dir, fileName);
			if (fs.existsSync(filePath)) {
				editFile(filePath, () => newComponent);
				found = true;
				break;
			}
		}
		if (found) break;
	}
	return found;
}

/**
 * Renames and replaces the content of an SVG file.
 * @param {string} root - Project root path.
 * @param {string} svgDir - Directory where the SVG is located.
 * @param {string} svgFileName - Current SVG file name.
 * @param {string} svgNewFileName - New name for the SVG file.
 * @param {string} svgCode - New SVG content.
 */
export function modifySvgCode(
	root: string,
	svgDir: string,
	svgFileName: string,
	svgNewFileName: string,
	svgCode: string,
) {
	fs.renameSync(
		path.resolve(root, svgDir, svgFileName),
		path.resolve(root, svgDir, svgNewFileName),
	);
	editFile(path.resolve(root, svgDir, svgNewFileName), () => {
		return svgCode;
	});
}

/**
 * Overwrites the Svelte main.js or main.ts file with the standard bootstrap code.
 * @param {string} root - Project root path.
 * @param {string[]} mainFiles - List of possible main files (main.js, main.ts).
 */
export function SvelteMainSetup(root: string, mainFiles: string[]) {
	let mainFile = "";

	for (const file of mainFiles) {
		const filePath = path.resolve(root, "src", file);
		if (fs.existsSync(filePath)) {
			mainFile = file;
			break;
		}
	}
	editFile(path.resolve(root, "src", mainFile), () => {
		return `
import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const root = mount(App, {
	target: document.getElementById("${ESSENTIALS.id}"),
});

export default root;

`;
	});
}

/**
 * Modifies the index.html file to link the correct main file and update the favicon and title.
 * @param {string} root - Project root path.
 * @param {string} indexFile - Name of the index.html file.
 */
export function modifyIndexHtmlConfig(root: string, indexFile: string) {
	let scriptSrc = "/src/main.js";
	if (fs.existsSync(path.resolve(root, "src", "main.tsx"))) {
		scriptSrc = "/src/main.tsx";
	} else if (fs.existsSync(path.resolve(root, "src", "main.jsx"))) {
		scriptSrc = "/src/main.jsx";
	} else if (fs.existsSync(path.resolve(root, "src", "main.ts"))) {
		scriptSrc = "/src/main.ts";
	} else if (fs.existsSync(path.resolve(root, "src", "main.js"))) {
		scriptSrc = "/src/main.js";
	}
	editFile(path.resolve(root, indexFile), () => {
		return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="${ESSENTIALS.Icon}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${ESSENTIALS.Button1}</title>
  </head>
  <body>
    <div id="${ESSENTIALS.id}"></div>
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>
        `;
	});
}

/**
 * Deletes unnecessary files or folders from the provided list.
 * @param {string} root - Project root path.
 * @param {string[]} list - List of relative paths to delete.
 */
export function deleteUnnecessaryFiles(root: string, list: string[]) {
	for (const item of list) {
		const filePath = path.resolve(root, item);
		if (fs.existsSync(filePath)) {
			fs.rmSync(filePath, { recursive: true, force: true });
		}
	}
}

/**
 * Edits the Next.js layout.tsx file if it exists.
 * @param {string} root - Project root path.
 * @param {string} newLayout - New content for the layout.
 */
export function editLayoutNextjs(root: string, newLayout: string) {
	const layoutPath = path.resolve(root, "src", "app", "layout.tsx");
	if (fs.existsSync(layoutPath)) {
		editFile(layoutPath, () => newLayout);
	} else {
		console.warn("Could not find layout.tsx to edit.");
	}
}

/**
 * Replaces all occurrences of a value in a file with another value. * @param {string} file - Absolute path to the file to modify.
 * @param {string} root - Project root path.
 * @param {string} file - Relative path to the file to modify.
 * @param {string} searchValue - Value to search for (regular expression).
 * @param {string} replaceValue - Value to replace with.
 */
export function replaceInFile(
	root: string,
	file: string,
	searchValue: string,
	replaceValue: string,
) {
	editFile(path.resolve(root, file), (content) =>
		content.replace(new RegExp(searchValue, "g"), replaceValue),
	);
}

/**
 * Modifies the index.html file to link the correct main file and update the favicon and title in solid projects.
 * @param {string} root - Project root path.
 * @param {string} indexFile - Name of the index.html file.
 */
export function modifyIndexHtmlConfigSolid(root: string, indexFile: string) {
	let scriptSrc = "/src/index.jsx";
	if (fs.existsSync(path.resolve(root, "src", "index.tsx"))) {
		scriptSrc = "/src/index.tsx";
	} else if (fs.existsSync(path.resolve(root, "src", "index.jsx"))) {
		scriptSrc = "/src/index.jsx";
	}
	editFile(path.resolve(root, indexFile), () => {
		return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="${ESSENTIALS.Icon}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${ESSENTIALS.Button1}</title>
  </head>
  <body>
    <div id="${ESSENTIALS.id}"></div>
    <script type="module" src="${scriptSrc}"></script>
  </body>
</html>
`;
	});
}

export function changeFileName(root: string, oldName: string, newName: string) {
	const oldPath = path.resolve(root, oldName);
	const newPath = path.resolve(root, newName);
	if (fs.existsSync(oldPath)) {
		fs.renameSync(oldPath, newPath);
	}
}
