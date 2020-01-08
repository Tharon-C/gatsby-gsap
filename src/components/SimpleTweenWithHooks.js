import React, { useState, useRef, useEffect } from "react"
import Image from "./image"
import { TimelineLite } from "gsap/all"

export default () => {
	let imgRef = useRef(null);

	const [animation, setAnimation] = useState(null);

	useEffect(() => {
		let logoTween = new TimelineLite({ paused: true })
		setAnimation(
			logoTween
				.to(imgRef, 2, { x: 500 })
				.to(imgRef, 2, { rotation: 360, transformOrigin: "center" }).play()
		);
	}, []);

	return (
		<>
			<div>
				<button onClick={() => animation.play()}>Play</button>
				<button onClick={() => animation.pause()}>Pause</button>
				<button onClick={() => animation.reverse()}>Reverse</button>
				<button onClick={() => animation.restart()}>Restart</button>
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