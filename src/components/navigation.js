import * as React from "react";
import {
	navigation,
	activeLink,
	navAnchor,
	linkOptions,
	linkRemove,
	hamburgerIcon,
} from "./navigation.module.css";

const Navigation = () => {
	const [activeNavLink, setActiveNavLink] = React.useState("");
	const [menuNav, setMenuNavOpen] = React.useState(true);

	// Access the width state from our custom hook
	const { width } = PageViewport();

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
	const closeNavMenu = () => {
		// Only close menu after clicking a nav item if in mobile viewport
		if (width <= 820) {
			setMenuNavOpen(false);
		}
	};

	return (
		<nav className={navigation}>
			<h3>
				/root/navigation/
				{/* Open and close menu and change icon to expand or retract */}
				<button className={hamburgerIcon} onClick={() => menuHandler()}>
					{menuNav ? "↰" : "↴"}
				</button>
			</h3>
			{/* Set page to active if active and close menu once clicked */}
			{menuNav ? (
				<ul className={linkOptions}>
					<li
						className={activeNavLink === "bio" ? activeLink : null}
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
						className={activeNavLink === "project" ? activeLink : null}
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
						className={activeNavLink === "contact" ? activeLink : null}
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

// Custom hook to calculate the current page size.
function PageViewport() {
	// create state that is set to width
	const [width, setWidth] = React.useState(0);

	// useEffect to calculate the window resizing
	React.useEffect(() => {
		const handleWindowResizing = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResizing);
		return () => window.removeEventListener("resize", handleWindowResizing);
	}, []);

	return { width };
}
export default Navigation;
