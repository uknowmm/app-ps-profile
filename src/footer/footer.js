import React from 'react';

import Loc from '../assets/map.png';
import Contact from '../assets/contact.png';
import Email from '../assets/email.png';

function footer() {
	return (
		<div>
			<footer className='page-footer font-small blue pt-4'>
				<div
					className='container-fluid text-center text-md-left'
					style={{ backgroundColor: 'aquamarine', padding: '30px' }}>
					<div className='row d-flex justify-content-between'>
						<div className='col-md-3 col-xs-2' style={{ textAlign: 'center' }}>
							<img src={Loc} alt='broken' style={{ width: '50px', height: '50px' }} />
							<h3 className='mt-2'>Location</h3>
							<p className='text-muted'>Shive Ganga layout, mahadevapura,bangalore - 560048</p>
						</div>

						<div className='col-md-3 col-xs-2'>
							<img src={Contact} alt='broken' style={{ width: '50px', height: '50px' }} />
							<h3 className='mt-2'>Contact</h3>
							<p className='text-muted'>(+91)- 8277495923</p>
						</div>

						<div className='col-md-2 col-xs-2'>
							<img src={Email} alt='broken' style={{ width: '50px', height: '50px' }} />
							<h3 className='mt-2'>Email</h3>
							<p className='text-muted'>prateek1992.ps@gmail.com</p>
						</div>
					</div>
				</div>
				<div className='footer-copyright text-center py-3 text-color' style={{ backgroundColor: 'dimgray' }}>
					Made with ♥ by Prateek, using Reactjs, Copyright © 2020. All Rights Reserved
				</div>
			</footer>
		</div>
	);
}

export default footer;
