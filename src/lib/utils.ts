const DEFAULT_TIMEOUT_MS = 500;
export function sleep(ms = DEFAULT_TIMEOUT_MS) {
	return new Promise((r) => setTimeout(r, ms));
}
