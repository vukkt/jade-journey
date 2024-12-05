import { useCounter } from "@/context/CounterContext";

export default function CounterDisplay() {
	const { count } = useCounter();

	return <h1>Global Counter: {count}</h1>;
}
