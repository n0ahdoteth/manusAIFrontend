import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
				Welcome to <span style={{ color: 'blue' }}>manus</span>.ai, the
				first ML-powered translator converting sign language into text.
			</div>
			<div style={{ marginTop: '40px' }}>
				<Link to='/translate'>
					<Button
						style={{
							width: '200px',
							height: '50px',
							fontSize: '20px',
						}}
					>
						Enter App
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Homepage;
