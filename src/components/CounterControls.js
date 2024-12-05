import { useCounter } from "@/context/CounterContext";
import { useCallback } from "react";

export default function CounterControls() {
	const { increment, decrement } = useCounter();

	const handleIncrement = useCallback(() => increment(), [increment]);
	const handleDecrement = useCallback(() => decrement(), [decrement]);

	return (
		<div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}
