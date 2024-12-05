import { useState, useEffect } from "react";

export function useTimer(initialTime = 0) {
	const [time, setTime] = useState(initialTime);
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

	const start = () => setRunning(true);
	const stop = () => setRunning(false);
	const reset = () => setTime(0);

	return { time, running, start, stop, reset };
}
