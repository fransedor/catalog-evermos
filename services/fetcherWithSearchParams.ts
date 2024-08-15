const fetcherWithSearchParams = async (url: string, params: Record<string, string>) => {
	const endpointUrl = new URL(url);
	for (const [param, value] of Object.entries(params)) {
		endpointUrl.searchParams.append(param, value)
	}
	try {
		const res = await fetch(endpointUrl);
		const resAsJson = await res.json();
		return resAsJson
	} catch(err) {
		console.error(err);
		throw new Error((err as Error).message);
	}
}

export default fetcherWithSearchParams