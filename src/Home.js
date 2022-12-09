import BlogList from "./BlogList";
import useFetch from "./hooks/useFetch";

const Home = () => {
	const { data: blogs, isPending, error } = useFetch("https://bot-blogs-api.onrender.com/blogs");

	// JSX
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && !error && <BlogList blogs={blogs} title={"Bot Blogz"} />}
		</div>
	);
};

export default Home;
