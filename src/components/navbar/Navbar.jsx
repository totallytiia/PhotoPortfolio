import React from 'react';
import SideMenu from '../sideMenu/SideMenu';

const navbar = ({ activeSection }) => {

	const sectionColorMap = {
		hero: 'text-black-700',
		portfolio: 'text-blue-700',
		services: 'text-yellow-700',
		contact: 'text-green-700',
	};

	return (
		<div className='fixed top-0 w-full font-bold flex justify-between p-5 z-50'>
			<SideMenu />
			<h1 className={`font-bold text-base hidden lg:block transition-colors duration-800 delay-400 ${sectionColorMap[activeSection] || 'text-black'}`}>Tiia Laukkanen</h1>
			<h1 className={`font-bold text-base hidden lg:block transition-colors duration-800 delay-400 ${sectionColorMap[activeSection] || 'text-black'}`}>Freelance Photographer</h1>
			<div className="lg:flex flex-col hidden">
				<h1 className={`font-bold text-base transition-colors duration-800 delay-400 ${sectionColorMap[activeSection] || 'text-black'}`}>Location</h1>
				<h2 className={`text-base transition-colors duration-800 delay-400 ${sectionColorMap[activeSection] || 'text-black'}`}>Helsinki, Finland</h2>
			</div>
		</div >
	)
}

export default navbar