import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//setup react router
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
