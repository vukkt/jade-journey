import { useState, useEffect, useCallback } from "react";
import PostItem from "@/components/PostItem";

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
	}, []);

	const logPostId = useCallback((id) => {
		console.log(`Post ID: ${id}`);
	}, []);

	return (
		<div>
			<h1>About this App</h1>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{items.map((item) => (
						<PostItem key={item.id} post={item} onLogId={logPostId} />
					))}
				</ul>
			)}
		</div>
	);
}
