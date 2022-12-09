import { useHistory, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isPending, error } = useFetch(`https://bot-blogs-api.onrender.com/api/blogs/${id}`);
	console.log(blog)
	const history = useHistory();

	const handleClick = () => {
		fetch(`https://bot-blogs-api.onrender.com/api/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="blog-details">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={handleClick}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
