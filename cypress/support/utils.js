export function generateStringWithRandomPrefix(string) {
	const prefix = Math.floor(Math.random() * 100);
	return `${prefix}${string}`;
}

export function getNumberOfResults(text) {
	var text = text.split(' ')[2];
	return parseInt(text);
}