import Link from "next/link";
import { CounterProvider } from "@/context/CounterContext"; // Adjust the path if necessary

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<CounterProvider>
					<nav>
						<Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
						<Link href="/contact">Contact</Link>
					</nav>
					<main>{children}</main>
				</CounterProvider>
			</body>
		</html>
	);
}
