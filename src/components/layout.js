import * as React from "react";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
	return (
		<main className={container}>
			<head>
				<title>{pageTitle}</title>
			</head>
			{children}
		</main>
	);
};

export default Layout;
