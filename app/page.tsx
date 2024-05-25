import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between max-w-5xl mx-auto'>
			<Header />
			<About />
			<Work />
			<Contact />
		</main>
	);
}
