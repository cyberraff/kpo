'use client';
import Link from 'next/link';
import { useState, useEffect, Suspense } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { LuX, LuMenu } from 'react-icons/lu';
const Navlinks = () => {
	return (
		<>
			<Link href='#about'>About</Link>
			<Link href='#portfolio'>Projects</Link>
			<Link href='#contact'>Contact</Link>
		</>
	);
};

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	// const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		console.log(url);
		setIsOpen(false); // Close menu on route change
	}, [pathname, searchParams]);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Suspense>
				<nav className=' w-1/3 flex justify-end text-base'>
					{/* <div className='hidden w-full justify-between md:flex'>
						<Navlinks />
					</div> */}
					<div className='text-2xl'>
						<button onClick={toggleNavbar}>
							{isOpen ? <LuX /> : <LuMenu />}
						</button>
					</div>
				</nav>
				{isOpen && (
					<div className='flex basis-full flex-col items-end bg-white text-base '>
						<Navlinks />
					</div>
				)}
			</Suspense>
		</>
	);
};

export default Nav;

//   https://www.instagram.com/kpo_of_portharcourt?igsh=MXVvbXZ1MmRiNGZmcg==

//   https://www.linkedin.com/in/king-peter-obi-7b79a925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app

//   https://m.facebook.com/KingPeterObi/

//   https://youtube.com/@kingpeterobi?si=y9KohAAPJuu0rcnq

//   https://x.com/KingPeterObi_?t=73KHNphibPSWJWFwBYc0pQ&s=09
