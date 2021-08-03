import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
	color: "black",
	padding: "96px",
	fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const NotFoundPage = () => {
	return (
		<main style={pageStyles}>
			<title>Not found</title>
			<p>Page not found</p>
			<Link to="/">Go home</Link>.
		</main>
	);
};

export default NotFoundPage;
