import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { LiaFacebookSquare } from 'react-icons/lia';
import { FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
	const icons = [
		{ id: 1, link: '#', icon: <CiLinkedin /> },
		{ id: 2, link: '#', icon: <FaInstagram /> },
		{ id: 3, link: '#', icon: <LiaFacebookSquare /> },
		{ id: 4, link: '#', icon: <FaYoutube /> },
		{ id: 5, link: '#', icon: <FaTwitter /> },
	];

	return (
		<>
			<div id='contact' className=' bg-slate-500 w-full pb-12'>
				<div className=' flex pt-20 justify-center space-x-5 text-xl'>
					{icons.map((icon) => {
						return (
							<a
								key={icon.id}
								href={icon.link}
								className=' p-2 bg-gray-400'>
								{icon.icon}
							</a>
						);
					})}
				</div>
				<div className='pt-8'>
					<Link
						href='#'
						className='flex p-4 justify-center content-center'>
						<FaWhatsapp className='text-xl mr-1 mt-1' />
						<span className='text-lg'>(234) 800 000 0000</span>{' '}
					</Link>
				</div>
			</div>
		</>
	);
}
