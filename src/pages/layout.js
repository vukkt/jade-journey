import Link from "next/link";

export default function Layout() {
	return (
		<div>
			<nav>
				<Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
				<Link href="/contact">Contact</Link>
			</nav>
		</div>
	);
}
