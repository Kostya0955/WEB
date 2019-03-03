export function flattenMessages(nestedMessages, prefix = '') {
	return Object.keys(nestedMessages).reduce((message,key)=>{
		let value = nestedMessages[key];
		let prefixedKey = prefix ? '${prefix}.${key}' : key;

		if (typeof value === 'string') {
			message[prefixedKey] = value;

		} else {
			Object.assign(message, flattenMessages(value,prefixedKey));
		}

		return message;
	}, {});
}