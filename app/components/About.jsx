import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';

export default function About() {
	return (
		<div className=' text-center py-16 bg-gray-800 mt-4'>
			<h2 className=' text-xl pb-4'>
				I am
				<span className=' text-2xl font-semibold'> King Peter Obi</span>
			</h2>
			<p className=' leading-relaxed'>
				I am a cinematographer Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Quaerat laudantium reprehenderit consequuntur?
				Ut nobis saepe quod neque corrupti ex non totam veritatis
				excepturi quas voluptate vitae, vero, ducimus praesentium! Quo
				laboriosam debitis nobis, fugiat repudiandae unde voluptates
				impedit nihil provident dignissimos et natus iusto id molestias
				cumque accusantium dicta harum adipisci illo facere non cum
				repellat tenetur perspiciatis. Asperiores, perspiciatis.
			</p>
			<p className=' leading-relaxed pt-8'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
				asperiores, magni minus quos ab natus quam voluptates doloremque
				porro ea. Repellat voluptatem maiores autem vitae quidem
				distinctio molestiae porro beatae.
			</p>
			<div className=' flex pt-4 justify-center space-x-5 text-xl'>
				<a href='/#' className=' p-2 bg-gray-400'>
					<CiLinkedin />
				</a>
				<a href='/#' className=' p-2 bg-gray-400'>
					<FaInstagram />
				</a>
				<a href='/#' className=' p-2 bg-gray-400'>
					<FaTiktok />
				</a>
			</div>
		</div>
	);
}
