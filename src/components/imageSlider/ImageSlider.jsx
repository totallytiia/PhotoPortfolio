import React, { useEffect, useState } from 'react';
import Dance2 from '../../assets/dance-2.jpg';
import Dance5 from '../../assets/dance-5.jpg';
import Dance6 from '../../assets/dance-6.jpg';
import Portfolio1 from '../../assets/portfolio-1.jpg';
import Portfolio12 from '../../assets/portfolio-12.jpg';

// List of photos to display
const photos = [
	{ id: 1, src: Portfolio1, alt: 'portfolio-1' },
	{ id: 2, src: Portfolio12, alt: 'portfolio-12' },
	{ id: 3, src: Dance5, alt: 'dance-5' },
	{ id: 4, src: Dance6, alt: 'dance-6' },
	{ id: 5, src: Dance2, alt: 'dance-2' },
];

const ImageSlider = () => {
	// Track the current image
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prevCurrent) => (prevCurrent === photos.length - 1 ? 0 : prevCurrent + 1));
		}, 200);

		// Clear interval on component unmount
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<img
			src={photos[current].src}
			alt={photos[current].alt}
			className="object-cover w-full h-full"
		/>
	);
};

export default ImageSlider;
