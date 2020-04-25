import React from 'react';
import { Link } from 'react-router-dom';

import Cover from '../assets/prat.png';

const Home = () => {
	return (
		<div>
			<img src={Cover} className='bg' alt='broken' />
			<div className='jumbotron jumbotron-fluid'>
				<div className='container'>
					<div style={{ marginLeft: '60%' }}>
						<h1 className='display-4'>Hello!</h1>
						<h3 className='text-muted'>I'm Prateek Sharma</h3>
						<p className='text-muted'>
							<Link className='btn btn-dark btn-md ml-6' to='/portfolio' role='button'>
								Portfolio
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
