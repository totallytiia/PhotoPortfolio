import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import heroImg from '../../assets/portfolio-1.jpg';



const Hero = ({ mouseMove }) => {

	return (
		<div onMouseMove={mouseMove} className='flex py-10 px-20 h-full lg:items-end gap-6 flex-col lg:flex-row items-center justify-center '>
			{/* <div className='lg:hidden flex flex-col justify-center items-center'>
				<h2 className='text-4xl text-blue-700'>Tiia Laukkanen</h2>
				<h3 className='font-serif italic'>Freelance photographer</h3>
			</div> */}
			<div className='lg:flex lg:flex-col xl:flex-1 gap-2'>
				<div className=' lg:flex flex-col text-right'>
					<h2 className='text-6xl lg:text-8xl text-blue-700'>Tiia Laukkanen</h2>
					<h3 className='text-2xl lg:text-3xl font-serif italic text-blue-700 ml-4'>Freelance photographer</h3>
				</div>
				<div className='lg:flex gap-2 mt-1 justify-start hidden'>
					<a href='#portfolio' className='text-xl xl:text-2xl flex items-center'>Portfolio <MdKeyboardArrowRight /></a>
					<a href='#services' className='text-xl xl:text-2xl flex items-center'>Services <MdKeyboardArrowRight /></a>
					<a href='#contact' className='text-xl xl:text-2xl flex items-center'>Contact <MdKeyboardArrowRight /></a>
				</div>
			</div>
			<div className='shrink-0 h-[40rem] lg:h-[45rem] xl:h-[50rem] w-[30rem] lg:w-[32rem] xl:w-[34rem] overflow-hidden'>
				{/* <ImageSlider /> */}
				{/* <img src={heroImg} alt="" className='h-full' /> */}
				<img
					src={heroImg}
					alt="Portfolio"
					className='h-full w-full object-cover'
				/>
			</div>
		</div>

	);
}

export default Hero;
