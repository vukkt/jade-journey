import { useState, useEffect } from "react";

export default function Timer() {
	const [time, setTime] = useState(() => {
		if (typeof window !== "undefined") {
			const savedTime = localStorage.getItem("timer");
			return savedTime ? parseInt(savedTime, 10) : 0;
		}
		return 0;
	});
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let timer;
		if (running) {
			timer = setInterval(() => {
				setTime((prev) => prev + 1);
			}, 1000);
		}
		return () => clearInterval(timer);
	}, [running]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem("timer", time);
		}
	}, [time]);

	return (
		<div>
			<h1>Timer: {time}s</h1>
			<button onClick={() => setRunning((prev) => !prev)}>
				{running ? "Stop" : "Start"}
			</button>
			<button onClick={() => setTime(0)} disabled={time === 0}>
				Reset
			</button>
		</div>
	);
}
