import React, { Component, Fragment } from 'react';
import Home from './Home/Home';
import Portfolio from './portfolio/Portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route
						exact
						path='/'
						render={(props) => (
							<Fragment>
								<div className='App'>
									<Home />
								</div>
							</Fragment>
						)}
					/>
					<Route exact path='/portfolio' component={Portfolio} />
				</Switch>
			</Router>
		);
	}
}

export default App;
