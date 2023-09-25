import sanity from './lib/sanityClient';

async function Home() {
	const query = `*[_type == 'pet']`;
	const data = await sanity.fetch(query);

	return (
		<div>
			<h1>Home (Sanity Data)</h1>
			{data.map((pet) => {
				return (
					<div class='pl-6 pb-2' key={pet.name}>
						<a href={`pets/${pet.name}`}>
							<p>{pet.name}</p>
						</a>
					</div>
				);
			})}
		</div>
	);
}
export default Home;
