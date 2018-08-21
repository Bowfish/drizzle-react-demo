// react imports
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

// container imports
import UserContainer from './containers/UserContainer';
import LoadingContainer from './containers/LoadingContainer';
import store from "./redux/store";

// drizzle imports
import { DrizzleProvider } from 'drizzle-react'
import drizzleOptions from './drizzle/options'

import './styles/index.css'

// make store availabel to the browser console
window.store = store

ReactDOM.render((
	<DrizzleProvider options={drizzleOptions}>
		<LoadingContainer>
			<Router>
				<UserContainer />
			</Router>
		</LoadingContainer>
	</DrizzleProvider>
	),
	document.getElementById('root')
);
