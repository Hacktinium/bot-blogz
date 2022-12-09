import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className="blog-preview-container">
					<img className="thumbnail" src={blog.image} alt={blog.title}/>
					<div className="blog-preview" key={blog.id}>
						<Link to={`blogs/${blog.id}`}>
							<h2>{blog.title}</h2>
							<p>by {blog.author}</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogList;
