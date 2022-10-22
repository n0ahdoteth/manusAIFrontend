// Import dependencies
import React, { useRef, useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import './App.css';
import { nextFrame } from '@tensorflow/tfjs';
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
// import {drawRect} from "./utilities";
import { Routes, Route } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Homepage from './Homepage';
import Translate from './Translate';

function App() {
	

	return (
		<>
			<main>
				<Routes>
					<Route exact path='/home' element={<Homepage />} />
                    <Route exact path='/translate' element={<Translate />} />
				</Routes>
			</main>

            <div className='App'>

                Welcome to Manus.ai




            </div>
		</>
	);
}

export default App;
