/** @format */

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
	<ReactFullpage
		//fullpage options
		licenseKey={'28B27742-9C0644F4-853CD239-DCF3F188'}
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<p>Section 1 (welcome to fullpage.js)</p>
						<button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
					</div>
					<div className="section">
						<p>Section 2</p>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>
);

export default Fullpage;
