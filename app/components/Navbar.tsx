import { Suspense } from 'react';
import Logo from './Logo';
import Nav from './Nav';

export default function Navbar() {
	return (
		<header className=' bg-white sticky top-0 z-[20] flex flex-wrap mx-auto w-full items-center justify-between text-2xl  h-12 pt-4'>
			{/* <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'> */}
			<Suspense>
				<Logo />
				<Nav />
			</Suspense>
			{/* </div> */}
		</header>
	);
}
