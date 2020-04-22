import React from 'react';
import Cover from '../assets/prat.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<img src={Cover} className='bg' alt='broken' />
			<div className='jumbotron jumbotron-fluid'>
				<div className='container' style={{ marginLeft: '55%' }}>
					<h1 className='display-4'>Hello!</h1>
					<h3 className='text-muted'>I'm Prateek Sharma</h3>
					<p className='text-muted'>
						<Link className='btn btn-dark btn-lg ml-6' to='/portfolio' role='button'>
							Portfolio
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;