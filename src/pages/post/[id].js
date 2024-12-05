
import { useRouter } from "next/router";

export default function Post({ post }) {
	const router = useRouter();

	// Fallback loading state for ISR
	if (router.isFallback) {
		return <p>Loading post...</p>;
	}

	if (!post) {
		return <p>Post not found.</p>;
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
}

export async function getStaticPaths() {
	try {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await res.json();

		const paths = posts.map((post) => ({
			params: { id: post.id.toString() },
		}));

		return { paths, fallback: true }; // Fallback enables ISR
	} catch (error) {
		console.error("Failed to fetch paths:", error);
		return { paths: [], fallback: true };
	}
}

export async function getStaticProps({ params }) {
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${params.id}`
		);

		if (!res.ok) {
			throw new Error("Failed to fetch post");
		}

		const post = await res.json();

		return {
			props: { post },
			revalidate: 60, // Revalidate the page every 60 seconds
		};
	} catch (error) {
		console.error("Failed to fetch post:", error);
		return { props: { post: null } };
	}
}
