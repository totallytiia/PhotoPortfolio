import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Portfolio = () => {
	return (
		<div className='h-[300vh]'>
			<ImageSlider />
		</div>
	);
}


import { default as Portfolio1, default as Portfolio9 } from '../../assets/portfolio-1.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio6 from '../../assets/portfolio-6.jpg';
import Portfolio8 from '../../assets/portfolio-8.jpg';

const photos = [
	{ id: 1, src: Portfolio1, alt: 'portfolio-1' },
	{ id: 2, src: Portfolio2, alt: 'portfolio-2' },
	{ id: 3, src: Portfolio4, alt: 'portfolio-4' },
	{ id: 4, src: Portfolio5, alt: 'portfolio-5' },
	{ id: 5, src: Portfolio6, alt: 'portfolio-6' },
	{ id: 6, src: Portfolio8, alt: 'portfolio-8' },
	{ id: 7, src: Portfolio9, alt: 'portfolio-9' },
];

const ImageSlider = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({ target: targetRef });

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

	return (
		<div ref={targetRef} className='h-full relative'>
			<div className="sticky top-0 flex h-screen overflow-hidden items-center">
				<motion.div style={{ x, width: `${photos.length * 100}vw` }} className='h-[45rem] lg:h-[50rem] xl:h-[55rem] w-full flex gap-4'>
					{photos.map((photo) => (
						<motion.div key={photo.id + 1} className='h-full shrink-0'>
							<motion.img src={photo.src} alt={photo.alt} className='object-cover object-left w-full h-full' />
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}

export default Portfolio;
