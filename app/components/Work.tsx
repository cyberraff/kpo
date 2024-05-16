import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export function ImageCarousel() {
	return (
		<div>
			<Carousel className='w-full max-w-sm text-black'>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Image
								src='/kpo_of_portharcourt_1.jpeg'
								alt='img'
								height={1000}
								width={1000}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<p className=' py-8 '>Image Reels</p>
		</div>
	);
}
export function VideoCarousel() {
	return (
		<div>
			<Carousel className='w-full max-w-sm'>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Image
								src='/bg-img.jpg'
								alt='img'
								height={800}
								width={800}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<p className=' py-8 '>Video Reels</p>
		</div>
	);
}

export default function Work() {
	return (
		<>
			<div id='portfolio' className=' '>
				<p className=' text-2xl font-semibold py-4'>My Work</p>
				<div>
					<ImageCarousel />
				</div>
				<div>
					<VideoCarousel />
				</div>
			</div>
		</>
	);
}
