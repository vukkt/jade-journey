import React from "react";

const PostItem = React.memo(function PostItem({ post, onLogId }) {
	console.log(`Rendering PostItem: ${post.title}`);
	return (
		<li>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<button onClick={() => onLogId(post.id)}>Log ID</button>
		</li>
	);
});

export default PostItem;
