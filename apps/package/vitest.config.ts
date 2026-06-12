import vitestBase from "@repo/vitest-config/vitest";
import { defineConfig } from "vitest/config";

export default defineConfig({
	...vitestBase,
	test: {
		...vitestBase.test,
		environment: "node",
	},
});
