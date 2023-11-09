import copy from 'copy-to-clipboard';

export function generateRandomString(length = 12) {
	let result = '';

	for (let i = 0; i < length; i++) {
		result += Math.floor(Math.random() * 10);
	}

	return result;
}

export const copyClipboard = (value: any) => {
	copy(value);

	return true;
};
