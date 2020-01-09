import React, { useState, useRef, useEffect } from "react"
import Image from "../components/image"
import Button from '../components/Button'
import { TimelineLite } from "gsap/all"

export default () => {
	let imgRef = useRef(null);

	const [animation, setAnimation] = useState(null);

	useEffect(() => {
		let logoTween = new TimelineLite({ paused: true })
		setAnimation(
			logoTween
				.to(imgRef, 2, { x: 500 })
				.to(imgRef, 2, { rotation: 360, transformOrigin: "center" })
		);
	}, []);

	return (
		<>
			<div>
				<Button onClick={() => animation.play()}>Play</Button>
				<Button onClick={() => animation.pause()}>Pause</Button>
				<Button onClick={() => animation.reverse()}>Reverse</Button>
				<Button onClick={() => animation.restart()}>Restart</Button>
			</div>
			<div
				style={{ width: '200px', margin: '50px 0' }}
				ref={element => imgRef = element }
			>
				<Image />
			</div>
		</>
	);
};