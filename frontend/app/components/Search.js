'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Search() {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/search?term=${search}`);
		setSearch('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={search}
				placeholder='Search'
				onChange={(e) => setSearch(e.target.value)}
				class='rounded-md p-2 text-slate-400 text-xl w-[260px] sm:w-80'
			/>
		</form>
	);
}
export default Search;
