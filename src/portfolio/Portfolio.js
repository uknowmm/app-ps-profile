import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Profile from '../assets/profile.png';
import Flag from '../assets/flag.png';

class Portfolio extends Component {
	render() {
		return (
			<div>
				<Nav
					title='PS-Profile'
					profileIcon='fas fa-id-card-alt'
					editIcon='fas fa-user-edit'
					userIcon='fas fa-user-circle'
				/>
				<div className='row'>
					<div className='col-2 offset-2'>
						<div className='row'>
							<img src={Profile} className='pic-container' alt='broken' />
						</div>
						<div className='row'>
							<p className='fnc-info'>
								(+91)-8277495923 prateek1992.ps@gmail.com Bangalore, India
								<img className='ml-2' src={Flag} alt='flag' style={{ width: '40px', height: '30px' }} />
							</p>
						</div>
					</div>
					<div className='col-6 bio-container'>
						<p className='text-muted fnc'>Frontend-developer</p>
						<p className='display-4 fnc-home'>Prateek Sharma</p>
						<p className='text-muted fnc'>
							04 years of relative experience in developing the single page application(SPA) using
							Angular2/4/5/6/7, React Js, HTML5, Bootstrap, CSS3 and JavaScript. Experienced in Core java
							with the extensive use of OOPS concepts, Multi-Threading, MVC architecture, Socket
							programming, Collections, java I/O and JDBC. Experience in working on Jenkins(CI/CD), Git
							and Bitbucket. Experience in working with Work fusion, Dynatrace, DCRUM and Sitescope for
							automation of tasks. Knowledge of Node.Js with Express framework, DB operations with
							MongoDB, Monk and Mongoose.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
