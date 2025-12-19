const splitCapitalizePascalCase = (str: string) => {
	return str
		.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
		.replace(/\b\w/g, (c) => c.toUpperCase());
};

export default splitCapitalizePascalCase;
