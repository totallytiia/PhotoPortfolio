import React from 'react';
import SideMenu from '../sideMenu/SideMenu';

const navbar = () => {


	return (
		<div className='fixed top-0 w-full font-bold flex justify-between p-5 z-50'>
			<SideMenu />
			<h1 className='text-black'>Tiia Laukkanen</h1>
			<h1 className='text-black'>Freelance Photographer</h1>
			<div className="lg:flex flex-col hidden">
				<h1 className='text-black'>Location</h1>
				<h2 className='text-black'>Helsinki, Finland</h2>
			</div>
		</div >
	)
}

export default navbar