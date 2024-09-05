import { motion } from 'framer-motion';
import React from 'react';

const sections = [
	{
		id: 1,
		images: [
			"src/assets/dance-1.jpg",
			"src/assets/dance-2.jpg",
		],
		portfolioImg: "src/assets/portfolio-1.jpg",
		caption: "Portfolio 1",
	},
	{
		id: 2,
		images: [
			"src/assets/portfolio-4.jpg",
			"src/assets/portfolio-8.jpg",
		],
		portfolioImg: "src/assets/portfolio-2.jpg",
		caption: "Portfolio 2",
	},
	{
		id: 3,
		images: [
			"src/assets/portfolio-5.jpg",
			"src/assets/portfolio-6.jpg",
		],
		portfolioImg: "src/assets/portfolio-1.jpg",
		caption: "Portfolio 3",
	}
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
							{images.map((src, index) => (
								<div className='w-full h-[50%] lg:w-[50%] lg:h-full'>
									<img
										key={index}
										className='w-full h-full object-cover'
										src={src}
										alt={`Slide ${index + 1}`}
									/>
								</div>
							))}
							<div>
								<motion.h2
									className='text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
									{caption}
								</motion.h2>
							</div>
						</div>
						<motion.div
							className='fixed h-[30vw] w-[25vw] top-0 overflow-hidden rounded-lg'
							style={{ x: x, y: y }}
						>
							<img
								className='object-cover w-full'
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
