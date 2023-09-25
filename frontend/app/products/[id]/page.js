import fetchData from '@/app/lib/webClient';

async function Product({ params }) {
	const product = await fetchData(`products/${params.id}`);

	return (
		<div>
			<h1>Product (fakeAPI)</h1>
			<div class='pl-6 pb-2' key={product.id}>
				<p>{product.title}</p>
			</div>
		</div>
	);
}
export default Product;
