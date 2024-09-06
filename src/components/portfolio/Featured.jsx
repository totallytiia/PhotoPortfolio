import { motion } from 'framer-motion';
import React from 'react';

import dance1 from '../../assets/dance-1.jpg';
import dance3 from '../../assets/dance-3.jpg';
import Dance4 from '../../assets/dance-4.jpg';
import Portfolio10 from '../../assets/portfolio-10.jpg';
import Portfolio11 from '../../assets/portfolio-11.jpg';
import Portfolio2 from '../../assets/portfolio-2.jpg';
import Portfolio3 from '../../assets/portfolio-3.jpg';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/portfolio-5.jpg';
import Portfolio7 from '../../assets/portfolio-7.jpg';
import Portfolio8 from '../../assets/portfolio-8.jpg';
import Portfolio9 from '../../assets/portfolio-9.jpg';

const sections = [
	{
		id: 1,
		images: [
			{ src: Portfolio2, alt: 'portfolio-2' },
			{ src: Portfolio3, alt: 'portfolio-3' },
		],
		portfolioImg: Portfolio7,
		caption: "Skye L.",
	},
	{
		id: 2,
		images: [
			{ src: Portfolio4, alt: 'portfolio-4' },
			{ src: Portfolio11, alt: 'portfolio-11' },
		],
		portfolioImg: Portfolio8,
		caption: "Portfolio 2",
	},
	{
		id: 3,
		images: [
			{ src: Portfolio5, alt: 'portfolio-5' },
			{ src: Portfolio9, alt: 'portfolio-9' },
		],
		portfolioImg: Portfolio10,
		caption: "Serena M.",
	},
	{
		id: 4,
		images: [
			{ src: dance1, alt: 'dance-1' },
			{ src: dance3, alt: 'dance-3' },
		],
		portfolioImg: Dance4,
		caption: "Ballet boy",
	},
];

const Featured = ({ mouseMove, mousePosition }) => {

	const { x, y } = mousePosition;

	return (
		<div onMouseMove={mouseMove} className='w-full' >
			{
				sections.map(({ id, images, portfolioImg, caption }) => (
					<div
						key={id}
						className='h-screen lg:h-[120vh] w-full overflow-hidden relative'
						style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 0)' }}
					>
						<div className='flex lg:flex-row flex-col h-full w-full relative'>
							{images.map(({ src, alt }, index) => (
								<div className='w-full h-[50%] lg:w-[50%] lg:h-full'>
									<img
										key={index}
										src={src}
										alt={alt}
										className='object-cover object-bottom h-full w-full'
									/>
								</div>
							))}
							<div>
								<motion.h2
									className='text-2xl lg:text-[4vw] text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
									{caption}
								</motion.h2>
							</div>
						</div>
						<motion.div
							className='fixed h-[30vw] w-[25vw] top-0 overflow-hidden rounded-lg'
							style={{ x: x, y: y }}
						>
							<img
								className='object-cover w-full h-full object-bottom'
								src={portfolioImg}
								alt={`Portfolio ${id}`}
							/>
						</motion.div>
					</div>
				))
			}
		</div >
	);
};

export default Featured;
