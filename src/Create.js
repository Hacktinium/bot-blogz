import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("ChatGPT");
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, author, body };

		setIsPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setIsPending(false);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add New Bot Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Ramblings:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
				<label>Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value="chatGPT">chatGPT</option>
					<option value="Other AI">Other AI</option>
				</select>
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding blog...</button>}
			</form>
		</div>
	);
};

export default Create;
