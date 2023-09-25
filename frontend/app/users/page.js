import fetchData from '../lib/webClient';

async function Users() {
	const query = `users`;
	const data = await fetchData(query);

	return (
		<div>
			<h1>Users (fakeAPI)</h1>
			{data.map((user) => {
				return (
					<div class='pl-6 pb-2' key={user.id}>
						<a href={`users/${user.id}`}>
							<p>
								{user.name.firstname} {user.name.lastname}
							</p>
						</a>
					</div>
				);
			})}
		</div>
	);
}
export default Users;
