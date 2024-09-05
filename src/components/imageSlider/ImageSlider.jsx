// import { motion, useScroll, useTransform } from 'framer-motion'
// import React, { useRef } from 'react'


// import { default as Portfolio1, default as Portfolio9 } from '../../assets/portfolio-1.jpg'
// import { default as Portfolio10, default as Portfolio2 } from '../../assets/portfolio-2.jpg'
// import { default as Portfolio11, default as Portfolio4 } from '../../assets/portfolio-4.jpg'
// import { default as Portfolio12, default as Portfolio5 } from '../../assets/portfolio-5.jpg'
// import Portfolio6 from '../../assets/portfolio-6.jpg'
// import Portfolio8 from '../../assets/portfolio-8.jpg'


// const photos = [
// 	{
// 		id: 1,
// 		src: Portfolio1,
// 		alt: 'portfolio-1',
// 	},
// 	{
// 		id: 2,
// 		src: Portfolio2,
// 		alt: 'portfolio-2',
// 	},
// 	{
// 		id: 3,
// 		src: Portfolio4,
// 		alt: 'portfolio-4',
// 	},
// 	{
// 		id: 4,
// 		src: Portfolio5,
// 		alt: 'portfolio-5',
// 	},
// 	{
// 		id: 5,
// 		src: Portfolio6,
// 		alt: 'portfolio-6',
// 	},
// 	{
// 		id: 6,
// 		src: Portfolio8,
// 		alt: 'portfolio-8',
// 	},
// 	{
// 		id: 7,
// 		src: Portfolio9,
// 		alt: 'portfolio-9',
// 	},
// 	{
// 		id: 8,
// 		src: Portfolio10,
// 		alt: 'portfolio-10',
// 	},
// 	{
// 		id: 9,
// 		src: Portfolio11,
// 		alt: 'portfolio-11',
// 	},
// 	{
// 		id: 10,
// 		src: Portfolio12,
// 		alt: 'portfolio-12',
// 	},
// ];

// const ImageSlider = () => {

// 	const targetRef = useRef < HTMLDivElement | null > (null);
// 	const { scrollYProgress } = useScroll({
// 		target: targetRef,
// 	});

// 	const x = useTransform(scrollYProgress, [0, 1], ["20%", "-70%"]);


// 	return <div className='h-[400vh]'>
// 		<div className='h-screen sticky top-0 flex items-center overflow-hidden'>
// 			<motion.div style={{ x }} className='flex gap-4'>
// 				{photos.map((photo) => {
// 					return <motion.div
// 						key={photo.id} className='w-[30em] h-[40em] bg-black'>
// 						<motion.img src={photo.src} alt={photo.alt} className='object-cover object-left w-full h-full' />
// 					</motion.div>
// 				})}
// 			</motion.div>
// 		</div>
// 	</div >
// }



// export default ImageSlider;