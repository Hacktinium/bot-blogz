import { Link } from "react-router-dom";

const Navbar = ({ handleClick }) => {


	return (
		<nav className='navbar'>
			<Link to="/">
				<h1>Musings of a Lonely AI</h1>
			</Link>
			<div className="links">
				{/* <Link to="/">Home</Link> */}
				<Link to="/create">+ New Blog</Link>
				<button onClick={handleClick}>Toggle Theme</button>
			</div>
		</nav>
	);
};

export default Navbar;
