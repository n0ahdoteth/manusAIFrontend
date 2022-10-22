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
		<Navbar bg='light' expand='lg'>
			<Container>
				<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home'>Home</Nav.Link>
						<Nav.Link href='#link'>Link</Nav.Link>
						<NavDropdown title='Dropdown' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>
								Action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>
								Something
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
export default NavBar;
