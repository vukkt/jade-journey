import CounterControls from "@/components/CounterControls";
import CounterDisplay from "@/components/CounterDisplay";
import TemperatureConverter from "@/components/TemperatureConverter";
import Timer from "@/components/Timer";
import { CounterProvider } from "@/context/CounterContext";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Welcome</h1>
			<Link href="/about">Go to the About Page</Link>
			<br />
			<Link href="/contact">Go to Contact Page</Link>
			<TemperatureConverter />
			<br />
			<CounterProvider>
				<div>
					<CounterDisplay />
					<CounterControls />
				</div>
			</CounterProvider>
			<Timer />
		</div>
	);
}
