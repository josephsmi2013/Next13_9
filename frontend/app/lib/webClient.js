async function fetchData(query) {
	const baseURL = 'https://fakestoreapi.com/';
	const url = `${baseURL}${query}`;

	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) throw new Error();

	return data;
}

export default fetchData;
