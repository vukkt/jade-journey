import PostItem from "@/components/PostItem";

export default function About({ posts }) {
	return (
		<div>
			<h1>About this App</h1>
			<ul>
				{posts.map((post) => (
					<PostItem key={post.id} post={post} />
				))}
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts?_limit=5"
		);
		const posts = await response.json();

		return {
			props: {
				posts,
			},
		};
	} catch (error) {
		console.error("Failed to fetch posts:", error);
		return {
			props: {
				posts: [],
			},
		};
	}
}
