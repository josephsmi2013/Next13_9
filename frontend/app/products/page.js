import fetchData from '../lib/webClient';

async function Products() {
	const products = await fetchData('products');

	return (
		<div>
			<h1>Products (fakeAPI)</h1>
			{products.map((product) => {
				return (
					<div class='pl-6 pb-2' key={product.id}>
						<a href={`products/${product.id}`}>
							<p>{product.title}</p>
						</a>
					</div>
				);
			})}
		</div>
	);
}
export default Products;
