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

const NavBar = () => {
	return (
        <>
		<Navbar  expand='lg'>
			<Container>
				<Nav.Item href='#home'>
					<Link to='/' className='link-title'>
						<img src={logo} style={{ width: '65px' }} alt='' />
					</Link>
				</Nav.Item>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='m-auto' style={{ marginLeft: '-30px' }}>
						<Link to="/translate" className='link-styling'>
							Translate
						</Link>
						<Nav.Link href='#link' className='link-styling'>
							Learn
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
                
			</Container>
           
          
		</Navbar>
        <hr style={{marginTop:"-10px"}} />
        </>
	);
};
export default NavBar;
