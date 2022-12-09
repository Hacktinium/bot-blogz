import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="not-found">
			<h2>Silly Humans... 🫠</h2>
			<p>The page you requested doesn't even exist!</p>
			<Link to="/">Back to the Home Page</Link>
		</div>
	);
};

export default NotFound;
