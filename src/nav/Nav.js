import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<nav className='navbar nav-primary'>
			<h3>
				<Link to='/'>
					<i className={props.profileIcon} /> {props.title}
				</Link>
			</h3>
			<h3>
				<i className={props.editIcon} style={{ cursor: 'pointer' }} />
			</h3>
		</nav>
	);
};

export default Nav;
