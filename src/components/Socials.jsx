/** @format */

import React from 'react';
import VkIcon from '../IconComponents/Vk';
import TelegramIcon from '../IconComponents/Telegram';
import GitHub from '../IconComponents/GitHub';

function Socials() {
	return (
		<ul className="header__socials">
			<li className="header__social">
				<div className="header__social_link">
					<VkIcon />
				</div>
			</li>
			<li className="header__social">
				<div className="header__social_link">
					<TelegramIcon />
				</div>
			</li>
			<li className="header__social">
				<div className="header__social_link">
					<GitHub />
				</div>
			</li>
		</ul>
	);
}

export default Socials;
