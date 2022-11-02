import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		const onScroll = () => handleShow(window.pageYOffset);
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className="nav__logo"
				src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
				alt="Logo"
			/>
			<img
				className="nav__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="user"
			/>
		</div>
	);
}

export default Navbar;
