import React from 'react';

import movie from '../assets/movie_time.jpg';
import pe_team from '../assets/pe_team.JPG';
import cc_team from '../assets/cc_team.JPG';
import zycat from '../assets/zycat.jpg';
import christmas from '../assets/christmas.JPG';

function gallary() {
	return (
		<div>
			<div className='galary-container'>
				<div className='card'>
					<img src={cc_team} alt='broke' />
					<div className='card__head'>CGI-CC_Team</div>
				</div>
				<div className='card'>
					<img src={pe_team} alt='broke' />
					<div className='card__head'>CGI-PE_Team</div>
				</div>
				<div className='card'>
					<img src={zycat} alt='broke' />
					<div className='card__head'>ZYCAT Event</div>
				</div>
				<div className='card'>
					<img src={christmas} alt='broke' />
					<div className='card__head'>Christmas Celebration</div>
				</div>
				<div className='card'>
					<img src={movie} alt='broke' />
					<div className='card__head'>Movie Time</div>
				</div>
			</div>
		</div>
	);
}

export default gallary;
