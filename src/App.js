import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {

	const [theme, setTheme] = useState('light');

	const toggleDarkMode = () => {
		// console.log('firing');
		setTheme(theme === 'dark' ? 'light' : 'dark');
		// console.log(theme);
	}

	const className = "App " + theme;

	return (
		<ThemeContext.Provider value={theme}>
			<Router>
				<div className={className}>
					<Navbar handleClick={toggleDarkMode} />
					<div className="content">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/create">
								<Create />
							</Route>
							<Route path="/blogs/:id">
								<BlogDetails />
							</Route>
							<Route path="*">
								<NotFound />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</ThemeContext.Provider>
	);
}

export default App;
