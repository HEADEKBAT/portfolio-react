/** @format */

import React from 'react';

import Socials from './Socials';

function Header() {
	return (
		<div className="header">
			<div className="header__logo">Дмитрий К.</div>
			<div className="header__nav">
				<Socials />
			</div>
		</div>
	);
}

export default Header;
