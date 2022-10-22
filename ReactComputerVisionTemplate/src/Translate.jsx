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

const Translate = () => {

    const webcamRef = useRef(null);
	const canvasRef = useRef(null);
	const [word, setWord] = useState('text');

	const labelMap = {
		1: { name: 'Hello', color: 'red' },
		2: { name: 'Thank You', color: 'yellow' },
		3: { name: 'I Love You', color: 'lime' },
		4: { name: 'Yes', color: 'blue' },
		5: { name: 'No', color: 'purple' },
	};

	// Define a drawing function
	const drawRect = (
		boxes,
		classes,
		scores,
		threshold,
		imgWidth,
		imgHeight,
		ctx
	) => {
		for (let i = 0; i <= boxes.length; i++) {
			if (boxes[i] && classes[i] && scores[i] > threshold) {
				// Extract variables
				const [y, x, height, width] = boxes[i];
				const text = classes[i];
				console.log(text == 1);

				if (text === 1) {
					setWord('Hello');
				}
				if (text === 2) {
					setWord('Thank You');
				}
				if (text === 3) {
					setWord('I love You');
				}
				if (text === 4) {
					setWord('Yes');
				}
				if (text === 5) {
					setWord('No');
				}

				// Set styling
				ctx.strokeStyle = labelMap[text]['color'];
				ctx.lineWidth = 10;
				ctx.fillStyle = 'white';
				ctx.font = '30px Arial';

				// DRAW!!
				ctx.beginPath();
				ctx.fillText(
					labelMap[text]['name'] +
						' - ' +
						Math.round(scores[i] * 100) / 100,
					x * imgWidth,
					y * imgHeight - 10
				);
				ctx.rect(
					x * imgWidth,
					y * imgHeight,
					(width * imgWidth) / 2,
					(height * imgHeight) / 1.5
				);
				ctx.stroke();
			}
		}
	};

	// Main function
	const runCoco = async () => {
		// 3. TODO - Load network
		// e.g. const net = await cocossd.load();
		// https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
		const net = await tf.loadGraphModel(
			'https://www.jsonkeeper.com/b/0UES'
		);

		//  Loop and detect hands
		setInterval(() => {
			detect(net);
		}, 16.7);
	};

	const detect = async (net) => {
		// Check data is available
		if (
			typeof webcamRef.current !== 'undefined' &&
			webcamRef.current !== null &&
			webcamRef.current.video.readyState === 4
		) {
			// Get Video Properties
			const video = webcamRef.current.video;
			const videoWidth = webcamRef.current.video.videoWidth;
			const videoHeight = webcamRef.current.video.videoHeight;

			// Set video width
			webcamRef.current.video.width = videoWidth;
			webcamRef.current.video.height = videoHeight;

			// Set canvas height and width
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;

			// 4. TODO - Make Detections
			const img = tf.browser.fromPixels(video);
			const resized = tf.image.resizeBilinear(img, [640, 480]);
			const casted = resized.cast('int32');
			const expanded = casted.expandDims(0);
			const obj = await net.then(() => executeAsync(expanded));
			//   console.log(obj)

			const boxes = await obj[1].array();
			const classes = await obj[2].array();
			const scores = await obj[4].array();

			// Draw mesh
			const ctx = canvasRef.current.getContext('2d');

			// 5. TODO - Update drawing utility
			// drawSomething(obj, ctx)
			requestAnimationFrame(() => {
				drawRect(
					boxes[0],
					classes[0],
					scores[0],
					0.8,
					videoWidth,
					videoHeight,
					ctx
				);
			});

			tf.dispose(img);
			tf.dispose(resized);
			tf.dispose(casted);
			tf.dispose(expanded);
			tf.dispose(obj);
		}
	};

	useEffect(() => {
		runCoco();
	}, [word]);
	return (
		<div className='App'>
			<p
				styles={{
					display: 'block',
					marginTop: '300px',
				}}
			>
				{word}{' '}
			</p>

			<header className='App-header'>
				<Webcam
					ref={webcamRef}
					muted={true}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zindex: 9,
						width: 640,
						height: 480,
						borderRadius: '15px',
					}}
				/>

				<canvas
					ref={canvasRef}
					style={{
						position: 'absolute',
						marginLeft: 'auto',
						marginRight: 'auto',
						left: 0,
						right: 0,
						textAlign: 'center',
						zindex: 8,
						width: 640,
						height: 480,
					}}
				/>
			</header>
		</div>
	);
};
export default Translate;
