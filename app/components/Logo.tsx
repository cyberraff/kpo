import Link from 'next/link';

const Logo = () => {
	return (
		<div>
			<Link href='/'>
				<p className=' font-extrabold'>KPO</p>
			</Link>
		</div>
	);
};

export default Logo;
