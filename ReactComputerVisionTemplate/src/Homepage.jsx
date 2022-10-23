import React from 'react';
import NavBar from './NavBar.jsx';
import { Button } from 'react-bootstrap';

const Homepage = ({ logo }) => {
	return (
		<div>
			<img src={logo} style={{ width: '300px' }} />

			<div
				style={{
					display: 'block',
					marginLeft: '20%',
					marginRight: '20%',
					fontSize: '40px',
					fontWeight: 'bold',
				}}
			>
				Welcome to <span style={{color:"blue"}}>manus</span>.ai, the first ML-powered translator converting
				sign language into text.
			</div>

			<div style={{marginTop:"40px"}}>
				
				<Button style={{width:"200px", height:"50px", fontSize:"20px" }}>Enter App</Button>
			</div>
		</div>
	);
};

export default Homepage;
