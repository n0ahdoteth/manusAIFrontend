import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import Translate from './components/Translate.jsx';
import logo from './images/manusai-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<div className='App'>
				<main>
					<Routes>
						<Route
							exact
							path='/'
							element={<Homepage logo={logo} />}
						/>
						<Route
							exact
							path='/translate'
							element={<Translate />}
						/>
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
