import matchers from "@testing-library/jest-dom/matchers";
import { afterEach, expect } from "vitest";

// 👇 solo si usas Testing Library en web
expect.extend(matchers);

// 🧼 limpieza global (si usas mocks globales)
afterEach(() => {
	// aquí podrías resetear msw, mocks globales, etc.
});
