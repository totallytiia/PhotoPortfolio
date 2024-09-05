import { motion } from 'framer-motion'
import React from 'react'


const variants = {
	open: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		}
	},
	closed: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	}
}

const itemVariants = {
	open: {
		y: 0,
		opacity: 1,
	},
	closed: {
		y: 40,
		opacity: 0,
	}
}


const Links = () => {

	const items = [
		"Home",
		"Portfolio",
		"Services",
		"Contact",
	]

	return (
		<motion.div
			className='absolute w-full h-full flex flex-col items-center justify-center gap-6'
			variants={variants}>
			{items.map(item => (
				<motion.a
					href={`#${item}`}
					className='text-2xl'
					key={item}
					variants={itemVariants}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}>
					{item}
				</motion.a>
			))}
		</motion.div>
	)
}

export default Links