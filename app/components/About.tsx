import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { LiaFacebookSquare } from 'react-icons/lia';
import { FaYoutube, FaTwitter } from 'react-icons/fa';

export default function About() {
	const icons = [
		{ id: 1, link: '#', icon: <CiLinkedin /> },
		{ id: 2, link: '#', icon: <FaInstagram /> },
		{ id: 3, link: '#', icon: <LiaFacebookSquare /> },
		{ id: 4, link: '#', icon: <FaYoutube /> },
		{ id: 5, link: '#', icon: <FaTwitter /> },
	];
	return (
		<div id='about' className=' text-center pt-16 pb-10  mt-4 px-4'>
			<h2 className=' text-xl pb-4'>
				My name is
				<span className=' text-2xl font-semibold'> King Peter Obi</span>
			</h2>
			<p>I am a filmmaker, creative director and a businessman.</p>
			<p className=' leading-relaxed pt-4'>
				&ldquo;As KPO, I bring a unique blend of project management,
				human resources, business analysis expertise and an artistic
				flare to the table. With over 2 years of experience in business
				development at FLAYMZE STUDIO, and 8 years as a filmmaker,
				I&rsquo;ve honed my skills in storytelling, creativity, and
				social impact. &rdquo;
			</p>
			<p className=' font-semibold pt-8'>
				I VALUE INTEGRITY, LOYALTY TO A COURSE
			</p>
			<p className=' leading-relaxed pt-4'>
				My goal is to harness my talents to craft innovative strategies
				that drive growth, customer satisfaction, and positive change
				through compelling stories and experiences.
			</p>
			<p className=' pt-4'>
				&ldquo; Why? &rsquo;cus I belive people are God&rsquo;s
				favourite creation, and Art speaks to the heart of men
			</p>
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
		</div>
	);
}