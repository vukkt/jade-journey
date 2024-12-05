import { useState, useEffect } from "react";

export default function Timer() {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let timer;
		if (running) {
			timer = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [running]);

	const toggleTimer = () => setRunning((prev) => !prev);

	return (
		<div>
			<h1>Timer: {time}s</h1>
			<button onClick={toggleTimer}>
				{running ? "Stop Timer" : "Start Timer"}
			</button>
		</div>
	);
}
