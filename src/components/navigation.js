import * as React from "react";
import { Link } from "gatsby";
import { navigation, navLink } from "./navigation.module.css";

const Navigation = () => {
	return (
		<nav className={navigation}>
			<ul>
				<li className={navLink}>
					<Link to="#layout-module--bio--1YW8x">/bio/</Link>
				</li>
				<li className={navLink}>
					<Link to="#layout-module--project--1P7nc">/project/</Link>
				</li>
				<li className={navLink}>
					<a href="#layout-module--contact--3XWFL">/contact/</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
