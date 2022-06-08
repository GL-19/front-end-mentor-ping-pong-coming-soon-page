import React from "react";
import logo from "./images/logo.svg";
import dashboard from "./images/dashboard.png";
import icon from "./images/favicon.png";

function App() {
	return (
		<main>
			<header>
				<img src={logo} alt="logo" />
			</header>
			<article>
				<h1>We are launching soon!</h1>
				<h2>Subscribe and get notified</h2>
			</article>
			<form action="">
				<input type="text" />
				<button>Notify Me</button>
			</form>
			<img src={dashboard} alt="dashboard" />
			<footer>
				<div>
					<img src={icon} alt="facebook-icon" />
					<img src={icon} alt="twitter-icon" />
					<img src={icon} alt="instagram-icon" />
				</div>
				<p>&copy; Copyright Ping. All rights reserved.</p>
			</footer>
		</main>
	);
}

export default App;
