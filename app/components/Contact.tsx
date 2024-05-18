import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiLinkedin, CiYoutube } from 'react-icons/ci';
import { LiaFacebookSquare } from 'react-icons/lia';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function Contact() {
	const icons = [
		{ id: 1, link: '#', icon: <CiLinkedin /> },
		{ id: 2, link: '#', icon: <FaInstagram /> },
		{ id: 3, link: '#', icon: <LiaFacebookSquare /> },
		{ id: 4, link: '#', icon: <CiYoutube /> },
		{ id: 5, link: '#', icon: <FaXTwitter /> },
	];

	return (
		<>
			<div id='contact' className=' bg-[#a9a9a9] w-full pb-12'>
				<div className=' text-center px-4 pt-20'>
					<p className=' font-bold text-lg'>Hello! </p>
					<p className='pt-4 px-4 sm:px-8 md:px-16 lg:px-24 '>
						I’m excited about the opportunity to collaborate with
						you. If you have any questions or would like to discuss
						potential projects, please don’t hesitate to reach out.
						Let’s create something great together!
					</p>
				</div>
				<div className='pt-8'>
					<Link
						href='#'
						className='flex p-4 justify-center content-center'>
						<FaWhatsapp className='text-xl mr-1 mt-1' />
						<span className='text-lg'>(234) 800 000 0000</span>{' '}
					</Link>
				</div>
				<div className=' flex pt-2 justify-center space-x-5 text-xl'>
					{icons.map((icon) => {
						return (
							<a
								key={icon.id}
								href={icon.link}
								className=' p-2 text-2xl bg-[#8b8b8b]'>
								{icon.icon}
							</a>
						);
					})}
				</div>
			</div>
		</>
	);
}
