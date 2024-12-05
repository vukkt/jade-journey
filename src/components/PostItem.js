import Link from "next/link";
import React from "react";

const PostItem = React.memo(function PostItem({ post, onLogId }) {
	console.log(`Rendering PostItem: ${post.title}`);
	return (
		<li>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<Link href={`/post/${post.id}`}>Read More</Link>
		</li>
	);
});

export default React.memo(PostItem);
