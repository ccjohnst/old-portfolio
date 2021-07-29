import * as React from "react";
import {
	navigation,
	navLink,
	activeLink,
	navAnchor,
} from "./navigation.module.css";

const Navigation = () => {
	const [activeNavLink, setActiveNavLink] = React.useState("");
	const [menuNav, setMenuNavOpen] = React.useState(true);

	// Function to set style of clicked nav item to be active
	const navHandler = (param) => {
		setActiveNavLink(param);
		closeNavMenu();
	};

	// Handle the nav menu expand/close button
	const menuHandler = () => {
		setMenuNavOpen(!menuNav);
		console.log("click");
	};

	// Function to close the nav menu after an item has been clicked
	const closeNavMenu = () => setMenuNavOpen(false);

	return (
		<nav className={navigation}>
			<h3>
				/root/navigation/
				<button onClick={() => menuHandler()}>{menuNav ? "↰" : "↴"}</button>
			</h3>
			{menuNav ? (
				<ul>
					<li
						className={activeNavLink === "bio" ? activeLink : navLink}
						onClick={() => navHandler("bio")}
					>
						<a
							href="#layout-module--bio--1YW8x"
							className={activeNavLink === "bio" ? null : navAnchor}
						>
							/bio/
						</a>
					</li>
					<li
						className={activeNavLink === "project" ? activeLink : navLink}
						onClick={() => navHandler("project")}
					>
						<a
							href="#layout-module--project--1P7nc"
							className={activeNavLink === "project" ? null : navAnchor}
						>
							/project/
						</a>
					</li>
					<li
						className={activeNavLink === "contact" ? activeLink : navLink}
						onClick={() => navHandler("contact")}
					>
						<a
							href="#layout-module--contact--3XWFL"
							className={activeNavLink === "contact" ? null : navAnchor}
						>
							/contact/
						</a>
					</li>
				</ul>
			) : null}
		</nav>
	);
};

export default Navigation;
