import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

export function CounterProvider({ children }) {
	const [count, setCount] = useState(0);

	const increment = () => setCount((prev) => prev + 1);
	const decrement = () => setCount((prev) => prev - 1);

	return (
		<CounterContext.Provider value={{ count, increment, decrement }}>
			{children}
		</CounterContext.Provider>
	);
}

export function useCounter() {
	const context = useContext(CounterContext);
	if (context === undefined) {
		throw new Error("useCounter must be used within a CounterProvider");
	}
	return context;
}
