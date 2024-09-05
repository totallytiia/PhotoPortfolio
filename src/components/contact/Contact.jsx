import { motion } from 'framer-motion';
import React from 'react';

const Contact = ({ mouseMove }) => {

	return (
		<motion.div onMouseMove={mouseMove} className='flex justify-center items-center w-full h-full'>
			<div className='h-[50rem] w-[40rem] overflow-hidden'>
				<img src="src/assets/dance-1.jpg" alt="Portfolio" className='h-full' />
			</div>
			<div className='w-[40rem] flex flex-col gap-2 p-8 rounded-lg'>
				<h1 className='text-center text-4xl font-bold text-blue-700'>Get in touch</h1>
				<form className='flex flex-col gap-2' action="">
					<input className='p-1 rounded-md border-blue-700 border-2' type="text" placeholder='Your name' />
					<input className='p-1 rounded-md border-blue-700 border-2' type="email" placeholder='Your email' />
					<textarea className='p-1 rounded-md border-blue-700 border-2' name="" id="" cols="30" rows="10" placeholder='Your message'></textarea>
					<button className='bg-blue-700 w-fit py-4 px-8 text-white font-bold rounded-md self-center'>Send</button>
				</form>
			</div>
		</motion.div>
	)
}

export default Contact