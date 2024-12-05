import { useCounter } from "@/context/CounterContext";

export default function CounterControls() {
	const { increment, decrement } = useCounter();

	return (
		<div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}
