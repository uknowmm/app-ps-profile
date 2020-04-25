import React from 'react';

import movie from '../assets/movie_time.jpg';
import pe_team from '../assets/pe_team.JPG';
import cc_team from '../assets/cc_team.JPG';
import zycat from '../assets/zycat.jpg';
import christmas from '../assets/christmas.JPG';

function gallary() {
	return (
		<div>
			<div class='galary-container'>
				<div class='card'>
					<img src={cc_team} alt='broke' />
					<div class='card__head'>CGI-CC_Team</div>
				</div>
				<div class='card'>
					<img src={pe_team} alt='broke' />
					<div class='card__head'>CGI-PE_Team</div>
				</div>
				<div class='card'>
					<img src={zycat} alt='broke' />
					<div class='card__head'>ZYCAT Event</div>
				</div>
				<div class='card'>
					<img src={christmas} alt='broke' />
					<div class='card__head'>Christmas Celebration</div>
				</div>
				<div class='card'>
					<img src={movie} alt='broke' />
					<div class='card__head'>Movie Time</div>
				</div>
			</div>
		</div>
	);
}

export default gallary;
