import React from 'react';
import ReactDOM from 'react-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './index.css';
import App from './App';

const options = {
	// you can also just use 'bottom center'
	position: positions.TOP_CENTER,
	timeout: 5000,
	offset: '70px',
	// you can also just use 'scale'
	transition: transitions.SCALE
};

const Root = () => (
	<AlertProvider template={AlertTemplate} {...options}>
		<App />
	</AlertProvider>
);

ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById('app-ps-profile')
);
