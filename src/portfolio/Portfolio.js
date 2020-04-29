import React, { Component } from 'react';
import Nav from '../nav/Nav';
import Gallary from '../gallary/gallary';
import Footer from '../footer/footer';
import Project from '../project/project';

import Profile from '../assets/IMG-prt.jpg';
import Flag from '../assets/flag.png';
import reclogo from '../assets/react.png';
import anglogo from '../assets/angular-logo.svg';
import jslogo from '../assets/js-logo.png';
import bootlogo from '../assets/boot-logo.jpg';
import htmllogo from '../assets/html5logo.png';
import nodelogo from '../assets/nodejs-logo.png';
import javalogo from '../assets/java-logo.jpg';
import dynalogo from '../assets/dynatrace-logo.png';
import developer from '../assets/mongo-logo.png';
import cv from '../assets/prateek_sharma(Resume).pdf';

class Portfolio extends Component {
	state = {
		url: 'https://www.linkedin.com/in/prateek-sharma-b5512aa4',
		text: 'Hire Me',
		cv: cv,
		startAnimation: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll, true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const top = window.pageYOffset + window.innerHeight,
			isVisible = top > this.ref.offsetTop ? true : false;
		this.setState({ startAnimation: isVisible });
	};

	mouseEnter = () => {
		this.setState({ text: 'Download CV' });
	};

	mouseLeave = () => {
		this.setState({ text: 'Hire Me' });
	};

	openProfile = () => {
		window.open(this.state.cv);
	};

	render() {
		console.log(this.state.startAnimation);
		return (
			<div>
				<Nav
					title='Home'
					profileIcon='fas fa-id-card-alt'
					editIcon='fas fa-user-edit'
					userIcon='fas fa-user-circle'
				/>
				<div className='bg-black' />
				<div className='row'>
					<div className='col-md-3 col-xs-2 offset-md-2'>
						<div className='rotate' style={{ textAlign: 'center' }}>
							<img src={Profile} className='pic-container' alt='broken' />
						</div>
						<div style={{ flexDirection: 'column', textAlign: 'center' }}>
							<div>
								<img className='ml-2' src={Flag} alt='flag' style={{ width: '40px', height: '30px' }} />
							</div>
							<div className='text-color'>(+91) - 8277495923</div>
							<div className='text-color'>prateek1992.ps@gmail.com</div>
							<div className='text-color'>Bangalore, India</div>
							<div>
								<a
									className='btn btn-primary btn-md'
									target='_blank'
									href={this.state.url}
									role='button'
									rel='noopener noreferrer'>
									Visit Linkedin Profile
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-xs-4 bio-container'>
						<p className='text-muted mt-4'>Frontend-developer</p>
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

				<div className='achivement-container d-flex' style={{ justifyContent: 'space-around' }}>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='award_heading'>5</div>
						</div>
						<p className='achivement-level'>Project</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='award_heading'>40+</div>
						</div>
						<p className='achivement-level'>Story</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='award_heading'>600+</div>
						</div>
						<p className='achivement-level'>Bugs</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='award_heading'>100%</div>
						</div>
						<p className='achivement-level'>Team Work</p>
					</div>
					<div className='rotate'>
						<div className='star award d-flex align-items-center justify-content-center'>
							<div className='award_heading'>85%</div>
						</div>
						<p className='achivement-level'>Creativity</p>
					</div>
				</div>

				<div className='d-flex justify-content-center' style={{ marginTop: '40px' }}>
					<div className='port_heading'>Project</div>
				</div>
				<Project />

				<div className='skill-container' style={{ textAlign: 'center' }}>
					<div className='port_heading'>Technical Skills</div>
					<div className='parent-container'>
						<div className='circle-container' ref={(ctx) => (this.ref = ctx)}>
							<div className='circle center'>
								<img src={reclogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg0' : ''} ${'circle'}`}>
								<img src={dynalogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg45' : ''} ${'circle'}`}>
								<img src={jslogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg90' : ''} ${'circle'}`}>
								<img src={developer} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg135' : ''} ${'circle'}`}>
								<img src={htmllogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg180' : ''} ${'circle'}`}>
								<img src={nodelogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg225' : ''} ${'circle'}`}>
								<img src={bootlogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg315' : ''} ${'circle'}`}>
								<img src={javalogo} alt='aa' />
							</div>
							<div className={`${this.state.startAnimation ? 'deg360' : ''} ${'circle'}`}>
								<img src={anglogo} alt='aa' />
							</div>
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
