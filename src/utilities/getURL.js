const getURL = (hostname, limit = 0) => {
	const url = new URL(hostname);

	if (limit > 0) {
		url.searchParams.set('limit', limit);
	}

	return url.toString();
};

export default getURL;
