import dns from "node:dns/promises";

const HOSTS = ["registry.npmjs.org", "google.com"] as const;
const TIMEOUT_MS = 3_000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
	return new Promise<T>((resolve, reject) => {
		const timer = setTimeout(() => reject(new Error("timeout")), ms);
		promise.then(
			(v) => {
				clearTimeout(timer);
				resolve(v);
			},
			(e) => {
				clearTimeout(timer);
				reject(e);
			},
		);
	});
}

export async function hasInternet(): Promise<boolean> {
	try {
		await Promise.any(
			HOSTS.map((host) => withTimeout(dns.lookup(host), TIMEOUT_MS)),
		);
		return true;
	} catch {
		return false;
	}
}
