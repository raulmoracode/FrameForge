import { spawn } from "node:child_process";
import type { BuiltCommand } from "../types/framework.js";

export async function runNative(built: BuiltCommand): Promise<void> {
	await new Promise<void>((resolve, reject) => {
		const child = spawn(built.cmd, built.args, {
			stdio: "inherit",
			shell: process.platform === "win32",
		});

		child.on("error", reject);
		child.on("exit", (code) => {
			if (code === 0) resolve();
			else
				reject(
					new Error(
						`Command failed with exit code ${code}: ${built.cmd} ${built.args.join(" ")}`,
					),
				);
		});
	});
}
