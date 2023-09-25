import Image from 'next/image';
import fetchData from '../lib/webClient';

async function Gallery() {
	const products = await fetchData('products');

	return (
		<div>
			<div>Gallery (fakeAPI)</div>
			<section class='px-2 my-3 grid gap-2 grid-cols-gallery'>
				{products.map((product) => (
					<div key={product.id} class='h-64 bg-gray-200 rounded-xl relative overflow-hidden group'>
						<Image
							alt={product.title}
							src={product.image}
							fill={true}
							sizes='(min-width: 1280px) 278px, (min-width:1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)' //The images are linted in the browser using an extenstion to get this value
							class='object-cover group-hover:opacity-75 transition-all duration-500 ease-in-outs'
						/>
					</div>
				))}
			</section>
		</div>
	);
}
export default Gallery;
