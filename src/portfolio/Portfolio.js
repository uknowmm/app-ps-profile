import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Gallary from '../gallary/gallary';
import Footer from '../footer/footer';

import Profile from '../assets/profile.png';
import Flag from '../assets/flag.png';
import reclogo from '../assets/react.webp';
import anglogo from '../assets/angular-logo.svg';
import jslogo from '../assets/js-logo.png';
import bootlogo from '../assets/boot-logo.jpg';
import htmllogo from '../assets/html5logo.png';
import nodelogo from '../assets/nodejs-logo.png';
import javalogo from '../assets/jvm-logo.webp';
import dynalogo from '../assets/dynatrace-logo.png';
import developer from '../assets/tech.png';
import cv from '../assets/prateek_sharma(Resume).pdf';

class Portfolio extends Component {
	state = {
		url: 'https://www.linkedin.com/in/prateek-sharma-b5512aa4',
		text: 'Hire Me',
		visibility: false,
		cv: cv
	};

	mouseEnter = () => {
		this.setState({ text: 'Download CV' });
	};

	mouseLeave = () => {
		this.setState({ text: 'Hire Me' });
	};

	showChild = () => {
		this.setState({ visibility: true });
	};

	hideChild = () => {
		this.setState({ visibility: false });
	};

	openProfile = () => {
		window.open(this.state.cv);
	};

	render() {
		const show = this.state.visibility;
		console.log(show);
		return (
			<div>
				<Nav
					title='Home'
					profileIcon='fas fa-id-card-alt'
					editIcon='fas fa-user-edit'
					userIcon='fas fa-user-circle'
				/>
				<div className='row'>
					<div className='col-2 offset-2' style={{ marginTop: '55px' }}>
						<div className='row rotate'>
							<img src={Profile} className='pic-container' alt='broken' />
						</div>
						<div className='row'>
							<p className='fnc-info'>
								(+91) - 8277495923 prateek1992.ps@gmail.com Bangalore, India
								<img className='ml-2' src={Flag} alt='flag' style={{ width: '40px', height: '30px' }} />
							</p>
							<a
								className='btn btn-dark btn-lg ml-6'
								target='_blank'
								href={this.state.url}
								role='button'
								rel='noopener noreferrer'>
								Visit Linkedin Profile
							</a>
						</div>
					</div>
					<div className='col-6 bio-container' style={{ marginTop: '90px' }}>
						<p className='text-muted'>Frontend-developer</p>
						<p className='align-items'>
							<span className='display-4 fnc-home'>Prateek Sharma</span>
							<span
								className='badge badge-pill badge-success contact'
								onMouseEnter={this.mouseEnter}
								onMouseLeave={this.mouseLeave}
								onClick={this.openProfile}>
								{this.state.text}
							</span>
						</p>
						<p className='text-muted fnc'>
							4 years of relative experience in developing the single page application(SPA) using
							Angular2/4/5/6/7, React Js, HTML5, Bootstrap, CSS3 and JavaScript. Experienced in Core java
							with the extensive use of OOPS concepts, Multi-Threading, MVC architecture, Socket
							programming, Collections, java I/O and JDBC. Experience in working on Jenkins(CI/CD), Git
							and Bitbucket. Experience in working with Work fusion, Dynatrace, DCRUM and Sitescope for
							automation of tasks. Knowledge of Node.Js with Express framework, DB operations with
							MongoDB, Monk and Mongoose.
						</p>
					</div>
				</div>
				<div className='career-container d-flex justify-content-center'>
					<div className='port_heading'>Career Path</div>
				</div>
				<div className='wrapper'>
					<div className='col-item'>
						<div className='d-flex align-items-center' style={{ justifyContent: 'flex-end' }}>
							<div style={{ border: '1px solid #f5f5f5', padding: '20px' }}>
								<p className='path_heading text-muted'>Senior Frontend Developer</p>
								<h3 className='text-color'>IBM</h3>
							</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='arrow-left hbl d-flex align-items-center shake justify-content-center'>
							<div className='year_heading'>2020-till date</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='arrow-right hbr d-flex align-items-center shake justify-content-center'>
							<div className='year_heading'>2018 - 2020</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='d-flex align-items-center ' style={{ justifyContent: 'flex-start' }}>
							<div style={{ border: '1px solid #f5f5f5', padding: '20px' }}>
								<p className='path_heading text-muted'>Software Engineer (Angular)</p>
								<h3 className='text-color'>Zycus Infotech Pvt Ltd</h3>
							</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='d-flex align-items-center ' style={{ justifyContent: 'flex-end' }}>
							<div style={{ border: '1px solid #f5f5f5', padding: '20px' }}>
								<p className='path_heading text-muted'>Associate System Engineer</p>
								<h3 className='text-color'>CGI</h3>
							</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='arrow-left hbl d-flex shake align-items-center justify-content-center'>
							<div className='year_heading'>2015 - 2018</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='arrow-right hbr d-flex shake align-items-center justify-content-center'>
							<div className='year_heading'>2011 - 2015</div>
						</div>
					</div>
					<div className='col-item'>
						<div className='d-flex align-items-center' style={{ justifyContent: 'flex-start' }}>
							<div style={{ border: '1px solid #f5f5f5', padding: '20px' }}>
								<p className='path_heading text-muted'>six week internship in java & android</p>
								<h3 className='text-color'>Tech5i, Noida</h3>
								<p className='path_heading text-muted'>Bachelor of Engineering CSE</p>
								<h3 className='text-color'>KIET,Gzb</h3>
							</div>
						</div>
					</div>
				</div>

				<div className='achivement-container d-flex align-items-center justify-content-between ml-6 mr-6'>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='year_heading' style={{ fontSize: '40px' }}>
								5
							</div>
						</div>
						<p className='achivement-level'>Project</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='year_heading' style={{ fontSize: '40px' }}>
								40+
							</div>
						</div>
						<p className='achivement-level'>Story</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='year_heading' style={{ fontSize: '40px' }}>
								600+
							</div>
						</div>
						<p className='achivement-level'>Bugs</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='year_heading' style={{ fontSize: '40px' }}>
								100%
							</div>
						</div>
						<p className='achivement-level'>Team Work</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='year_heading' style={{ fontSize: '40px' }}>
								85%
							</div>
						</div>
						<p className='achivement-level'>Creativity</p>
					</div>
				</div>
				<div className='skill-container d-flex justify-content-center'>
					<div className='port_heading'>Project and Technical Skill</div>
				</div>
				<div>
					<div className='circle-container'>
						<p className='msg_heading text-muted mt-6' style={{ textAlign: 'center' }}>
							Project#1: Dewdrops
						</p>
						<p className='text-muted text-color' style={{ textAlign: 'center' }}>
							Developed various common/core presentation as well as business level angular components to
							be used in more than 4 products like tabset, dropdown, jump-to, numeric directive and tax
							Component. Also involved in bug fixes and enhancement of common component
						</p>
						<p className='msg_heading text-muted' style={{ textAlign: 'center' }}>
							Project#2: Einvoice
						</p>
						<p className='text-muted text-color' style={{ textAlign: 'center' }}>
							Zycus e-Invoicing software enables suppliers to transmit electronic invoices and automates
							receiving and invoice-matching processes for both PO and non-PO based invoices.nvolved in
							code refactoring of application and worked on transition page, checkout page and submission
							of PO and non-PO invoice
						</p>
						<div
							className='circle center shake'
							onMouseEnter={this.showChild}
							onMouseLeave={this.hideChild}
							style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={developer} alt='aa' />
						</div>

						<p className='msg_heading text-muted' style={{ textAlign: 'center' }}>
							Project#3: iAnalyze
						</p>
						<p className='text-muted text-color' style={{ textAlign: 'center' }}>
							Integated the high charts in the product and worked on spend-miner and opportunity module of
							the product
						</p>
						<p className='msg_heading text-muted' style={{ textAlign: 'center' }}>
							Project#4: Eproc
						</p>
						<p className='text-muted text-color' style={{ textAlign: 'center' }}>
							Guides shoppers seamlessly to best-value purchasing decisions and delivers an unrivalled
							consumer-like shopping experience. Worked on line Item details and bug fixes on various
							pages of the product
						</p>
						<p className='msg_heading text-muted' style={{ textAlign: 'center' }}>
							Project#5: APM tool & Automation
						</p>
						<p className='text-muted text-color' style={{ textAlign: 'center' }}>
							The APM Shop and Automation Team involve in cleaning and configuring the event in infra
							monitoring tools like Dynatrace, Dcrum and Event Correlation, making sense of a large number
							of events and pinpointing the few events that are really important in that mass of
							information by looking for and analysing relationships between events and automating the
							repetitive task. Involved in Business Process Automation
						</p>
						<div className='deg0 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={dynalogo} alt='aa' />
						</div>
						<div className='deg45 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={jslogo} alt='aa' />
						</div>
						<div className='deg90 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={bootlogo} alt='aa' />
						</div>
						<div className='deg135 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={htmllogo} alt='aa' />
						</div>
						<div className='deg180 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={nodelogo} alt='aa' />
						</div>
						<div className='deg225 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={anglogo} alt='aa' />
						</div>
						<div className='deg315 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={javalogo} alt='aa' />
						</div>
						<div className='deg360 circle' style={{ visibility: !show ? 'visible' : 'hidden' }}>
							<img src={reclogo} alt='aa' />
						</div>
					</div>
				</div>
				<div className='details-container d-flex justify-content-center'>
					<div className='port_heading'>Gallery</div>
				</div>
				<Gallary />
				<Footer />
			</div>
		);
	}
}

export default Portfolio;
