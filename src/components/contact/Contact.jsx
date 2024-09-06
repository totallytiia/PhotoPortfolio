import { motion } from 'framer-motion';
import React from 'react';



const Contact = ({ mouseMove }) => {

	return (
		<motion.div onMouseMove={mouseMove} className='flex flex-col lg:flex-row justify-center items-center w-full h-full overflow-hidden'>
			<div className='w-2/3 md:w-1/2 h-full flex justify-center items-center lg:items-start pt-10 py-4 lg:py-6'>
				<div className="flex flex-col justify-around h-full w-[25rem] lg:w-[25vw]">
					<div className=''>
						<h1 className='text-[5rem] lg:text-[8vw] 2xl:text-[8rem] font-bold leading-none'>Get in touch</h1>
					</div>
					<div className=''>
						<h4 className='text-[1.4rem] lg:text-[1.8vw] 2xl:text-[2rem] font-bold text-balance'> Let's start a conversation about your project. I'm available for freelance work and collaborations.</h4>
					</div>
					<div className=' flex flex-col gap-2 lg:gap-4 text-[1rem] lg:text-[1.2vw] 2xl:text-[1.2rem]'>
						<div>
							<p className='text-gray-400'>Email</p>
							<h4 className=''> photographytiia@gmail.com</h4>
						</div>
						<div>
							<p className='text-gray-400'>Instagram</p>
							<a href="https://www.instagram.com/tiialaukkanen/" target="_blank" rel="noreferrer" className=''>@photosbytiialaukkanen</a>
						</div>
						<div>
							<p className='text-gray-400'>Facebook</p>
							<a href="https://www.facebook.com/photographytiia" target="_blank" rel="noreferrer" className=''>Photography Tiia Laukkanen</a>
						</div>
					</div>
				</div >
			</div >
			<div className='hidden lg:block border-r-2 h-[80vh]' />
			<div className='w-full h-[80%] lg:h-full lg:w-1/2 flex flex-col justify-end lg:justify-between items-center gap-6'>
				<div className='hidden lg:relative lg:flex justify-center lg:h-[50%] items-center w-[25rem] lg:w-[25vw]'>
					<h4 className='text-[1rem] lg:text-[1.5vw] xl:text-[1.4rem]'> Fill out the form below and I'll get back to you as soon as possible.</h4>
				</div>
				<div className='w-full bg-black h-full min-h-96 lg:h-[50%] flex flex-col justify-center items-center text-white gap-8'>
					<form className='flex shrink-0 flex-col gap-4 w-[25rem] lg:w-[22rem] xl:w-[30rem] 2xl:w-[40rem]' action="">
						<input className='p-1 bg-transparent border-b-2 outline-0' type="text" placeholder='Your name' />
						<input className='p-1 bg-transparent border-b-2 outline-0' type="email" placeholder='Your email' />
						<label className='text-gray-400 ml-1' htmlFor="">Tell about your project</label>
						<input className='p-1 bg-transparent border-b-2 outline-0' type="message" placeholder='' />
						<button className='bg-blue-700 w-full text-white font-bold py-2'>Send</button>
					</form>
				</div>
			</div>
		</motion.div >
	)
}

export default Contact