export function jsonToWebsocket(value: any) {
	try {
		const message = JSON.stringify({
			...value,
		});
		return message;
	} catch {
		return null;
	}
}

export function stringFromWebsocket(string: any) {
	try {
		return JSON.parse(`${string}`);
	} catch {
		return null;
	}
}
