import { setupReactCompiler } from "./reactCompiler.js";

export const REACT_COMPILER_VARIANTS: Record<string, (root: string) => void> = {
	"hook:react-compiler-ts:react-ts": (root) => setupReactCompiler(root, true),
	"hook:react-compiler:react": (root) => setupReactCompiler(root, false),
};
