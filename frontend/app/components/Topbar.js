import Link from 'next/link';
import Search from './Search';

function Topbar() {
	return (
		<header class='bg-slate-300 sticky top-0 z-10 p-4'>
			<section class='flex flex-col max-w-6xl justify-between items-center md:flex-row '>
				<nav class='max-w-3xl space-x-10 font-bold text-2xl'>
					<Link href='/'>Home</Link>
					<Link href='/users'>Users</Link>
					<Link href='/products'>Products</Link>
					<Link href='/gallery'>Gallery</Link>
				</nav>
				<Search />
			</section>
		</header>
	);
}
export default Topbar;
