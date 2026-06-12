import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		// 🧠 entorno por defecto (luego se sobreescribe en cada app)
		environment: "node",

		// 📁 dónde buscar tests
		include: ["**/*.{test,spec}.ts"],

		// 🚫 qué ignorar
		exclude: ["node_modules", "dist", "build", "e2e"],

		// ⚡ globals para no tener que importar expect/describe siempre
		globals: true,

		// 🧼 limpiar mocks automáticamente entre tests
		clearMocks: true,
		restoreMocks: true,

		// 📊 cobertura (opcional pero recomendable)
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			exclude: ["node_modules", "dist", "build", "**/*.d.ts", "**/index.ts"],
		},

		// 🧪 setup global (mocks, matchers, etc.)
		setupFiles: ["./setup.ts"],

		// ⚡ paralelo (importante en monorepos)
		pool: "threads",

		// 💡 útil en CI
		passWithNoTests: true,
	},
});
