import { render, screen } from "@testing-library/react";
import { CounterProvider } from "@/context/CounterContext";
import CounterDisplay from "@/components/CounterDisplay";

describe("CounterDisplay Component", () => {
	it("displays the initial counter value", () => {
		render(
			<CounterProvider>
				<CounterDisplay />
			</CounterProvider>
		);

		const counterText = screen.getByText(/Global Counter: 0/i);
		expect(counterText).toBeInTheDocument();
	});
});
