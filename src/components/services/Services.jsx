import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';

const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.4,
		},
	},
};

const childVariants = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

const Services = ({ mouseMove, mousePosition }) => {

	const { x, y } = mousePosition;
	const ref = useRef(null);
	const isInView = useInView(ref, { triggerOnce: false, margin: '0px' });
	const [isHovered, setIsHovered] = useState(false);

	const texts = [
		'With over a decade of experience,',
		'specializing in dance, portraits and events.',
		'My international work captures',
		'dynamic moments with artistry',
		'and precision, delivering',
		'compelling visuals for every project.',
	];

	return (
		<motion.div
			onMouseMove={mouseMove}
			className="h-full relative flex flex-col justify-center items-center clip-custom bg-grey-300 text-green-700"
		>
			<motion.div
				ref={ref}
				variants={variants}
				initial="hidden"
				animate={isInView ? 'visible' : 'hidden'}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				className="z-20 mix-blend-difference w-3/5 text-[3vw] text-center text-balance flex flex-col gap-2"
			>
				{texts.map((text, index) => {


					return (
						<motion.p
							key={index}
							variants={childVariants}
						>
							{text}
						</motion.p>
					);
				})}
			</motion.div>


			<motion.div
				className="fixed top-0 left-0 w-[25vw] h-[30vw] flex justify-center items-center overflow-hidden rounded-lg"
				style={{ x, y }}
			>
				<motion.div
					className="flex justify-center items-center w-[10vw] h-[10vw]"
					initial={{ opacity: 0, scale: 0 }} // Initial state when not in view
					animate={{
						opacity: isInView ? 1 : 0,
						scale: isInView ? (isHovered ? 1.8 : 0.2) : 0,
					}}
					transition={{
						type: 'tween',
						stiffness: 300,
						damping: 30,
						duration: 0.4,
						delay: 0.2,
					}}
				>
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="lightgray">
						<circle cx="50" cy="50" r="50" />
					</svg>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default Services;
