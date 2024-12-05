import { useTimer } from "@/hooks/useTimer";

export default function Timer() {
	const { time, running, start, stop, reset } = useTimer();

	return (
		<div>
			<h1>Timer: {time}s</h1>
			<button onClick={running ? stop : start}>
				{running ? "Stop" : "Start"}
			</button>
			<button onClick={reset} disabled={time === 0}>
				Reset
			</button>
		</div>
	);
}
