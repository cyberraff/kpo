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
			<p className='  font-semibold w-fit pr-1 my-4 border-b-2 border-[#a9a9a9]  pt-6'>
				Image Reels
			</p>

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
		</div>
	);
}
export function VideoCarousel() {
	return (
		<div>
			<p className=' font-semibold w-fit pr-1 my-4 border-b-2 border-[#a9a9a9] pt-6'>
				Video Reels
			</p>

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
		</div>
	);
}

export default function Work() {
	return (
		<>
			<div id='portfolio' className='py-16 px-4 w-full '>
				<p className=' text-2xl font-semibold py-4'>
					Welcome to My Portfolio!
				</p>
				<p>
					Dive into my projects and see the creativity and hard work
					behind each one. From innovative designs to successful
					collaborations, I’m excited to share what I’ve been up to.
					Enjoy exploring!
				</p>
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
