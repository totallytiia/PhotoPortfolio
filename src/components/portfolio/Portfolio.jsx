import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const Portfolio = ({ mouseMove }) => {
	return (
		<div onMouseMove={mouseMove} className='h-[300vh]'>
			<ImageSlider />
		</div>
	);
}


import Dance2 from '../../assets/dance-2.jpg';
import Dance5 from '../../assets/dance-5.jpg';
import Dance6 from '../../assets/dance-6.jpg';
import { default as Portfolio1 } from '../../assets/portfolio-1.jpg';
import Portfolio12 from '../../assets/portfolio-12.jpg';

const photos = [
	{ id: 1, src: Portfolio1, alt: 'portfolio-1' },
	{ id: 4, src: Portfolio12, alt: 'portfolio-12' },
	{ id: 5, src: Dance5, alt: 'dance-5' },
	{ id: 6, src: Dance6, alt: 'dance-6' },
	{ id: 2, src: Dance2, alt: 'dance-2' },
];

const ImageSlider = () => {

	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({ target: targetRef });

	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);


	return (
		<div ref={targetRef} className='h-full relative'>
			<div className="sticky top-0 flex h-screen overflow-hidden items-center">
				{/* h-[28rem] lg:h-[40rem] xl:h-[50rem] */}
				<motion.div style={{ x, width: `${(photos.length - 2.8) * 35.8}vw` }} className='h-[75vh] flex gap-[0.8vw]'>
					{photos.map((photo) => (
						<motion.div key={photo.id + 1} className='h-full w-[35vw] shrink-0'>
							<motion.img loading='eager' src={photo.src} alt={photo.alt} className='object-cover w-full h-full' />
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
}

export default Portfolio;
