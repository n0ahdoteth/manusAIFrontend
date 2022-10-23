// Import dependencies
import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import './App.css';
import { nextFrame } from '@tensorflow/tfjs';
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
// import {drawRect} from "./utilities";
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Homepage from './Homepage';
import Translate from './Translate.jsx';
import logo from './images/manusai-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';

function App() {
	return (
		<>
			<div className='App'>
				{/* <NavBar /> */}

				{/* <Link to='/strategies' className='link-styling'>
							Group Strategy/Calendar
				</Link> */}

				<main>
					<Routes>
						<Route exact path='/' element={<Homepage logo={logo}/>} />
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
