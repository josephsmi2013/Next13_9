'use client';

function Error({ error, reset }) {
	return (
		<div>
			<h1 class='pb-4'>Something went wrong!</h1>

			<h2>You can navigate away or try to load the page again</h2>
			<button class='bg-green-500 rounded-sm p-2 ring-1 ring-inset ring-green-900' onClick={() => reset()}>
				Try again
			</button>
		</div>
	);
}

export default Error;
