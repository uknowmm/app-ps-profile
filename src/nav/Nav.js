import React from 'react';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Nav = (props) => {
	const alert = useAlert();
	return (
		<nav className='navbar nav-primary'>
			<h3>
				<Link to='/'>
					<i className={props.profileIcon} /> {props.title}
				</Link>
			</h3>
			<h3>
				<i
					className={props.editIcon}
					style={{ cursor: 'pointer' }}
					onClick={() => {
						alert.show('oops, Access Denied!');
					}}
				/>
			</h3>
		</nav>
	);
};

export default Nav;
