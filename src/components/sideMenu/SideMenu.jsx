import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';


const variants = {
	open: {
		clipPath: 'circle(1400px at 40px 40px)',
		transition: {
			type: 'spring',
			stiffness: 50,
			restDelta: 2,
		}
	},
	closed: {
		clipPath: 'circle(0px at 31px 31px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		}
	},
}


const SideMenu = () => {

	const [open, setOpen] = useState(false);


	return (
		<motion.div
			className="flex flex-col items-center text-white"
			animate={open ? 'open' : 'closed'}>
			< motion.div
				className='z-30 fixed top-0 left-0 bottom-0 w-full lg:w-[30rem] bg-blue-700'
				variants={variants}>
				<Links />
			</motion.div >
			<ToggleButton setOpen={setOpen} />
		</motion.div >
	)
}

export default SideMenu