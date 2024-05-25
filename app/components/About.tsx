import Image from 'next/image';

export default function About() {
	return (
		<div className='lg:flex bg-[#a9a9a939] mt-4 pb-8 text-end'>
			<div className='hidden lg:block w-[40%] pt-28 pl-4'>
				<Image
					src='/camera.png'
					alt='camera'
					width={350}
					height={350}
				/>
			</div>
			<div
				id='about'
				className='  pt-16 pb-10  mt-4 px-4  lg:w-[60%] lg:text-left'>
				<h2 className=' text-xl pb-4'>
					My name is
					<span className=' text-2xl font-semibold'>
						{' '}
						King Peter Obi
					</span>
				</h2>
				<p>I am a filmmaker, creative director and a businessman.</p>
				<p className=' leading-relaxed pt-4  w-[80%] ml-auto lg:w-full'>
					&ldquo;As KPO, I bring a unique blend of project management,
					human resources, business analysis expertise and an artistic
					flare to the table. With over 2 years of experience in
					business development at FLAYMZE STUDIO, and 8 years as a
					filmmaker, I&rsquo;ve honed my skills in storytelling,
					creativity, and social impact. &rdquo;
				</p>
				<p className=' font-semibold pt-8'>
					I VALUE INTEGRITY, LOYALTY TO A COURSE
				</p>
				<p className=' leading-relaxed pt-4  w-[80%] ml-auto lg:w-full'>
					My goal is to harness my talents to craft innovative
					strategies that drive growth, customer satisfaction, and
					positive change through compelling stories and experiences.
				</p>
				<p className=' pt-4 w-[80%] ml-auto lg:w-full'>
					&ldquo; Why? &rsquo;cus I believe people are God&rsquo;s
					favorite creation, and Art speaks to the heart of men
				</p>
			</div>
		</div>
	);
}
