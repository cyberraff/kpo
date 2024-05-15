import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Header />
			<About />
			<Work />
			<p>KPO</p>
		</main>
	);
}
