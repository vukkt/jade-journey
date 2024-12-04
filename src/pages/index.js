import TemperatureConverter from "@/components/TemperatureConverter";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Welcome</h1>
			<Link href="/about">Go to the About Page</Link>
			<br />
			<Link href="/contact">Go to Contact Page</Link>
			<TemperatureConverter />
		</div>
	);
}
