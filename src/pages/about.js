import { useEffect, useState } from "react";

export default function About() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchItems() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/posts?_limit=5"
				);
				const data = await response.json();
				setItems(data);
			} catch (error) {
				console.error("Failed to fetch items:", error);
			} finally {
				setLoading(false);
			}
		}
		fetchItems();
	});
	return (
		<div>
			<h1>About this App</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{items.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}
