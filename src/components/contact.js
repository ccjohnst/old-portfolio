import * as React from "react";
import proton from "./protonmail-sign-dark.png";
import github from "./GitHub-Mark-32px.png";
import { contactContainer } from "./contact.module.css";

const ContactIcons = () => {
	return (
		<div className={contactContainer}>
			<a
				href="mailto:christopherjohnston@protonmail.com"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					src={proton}
					width="23px"
					height="32.5px"
					alt="Protonmail logo"
				></img>{" "}
			</a>
			<a
				href="https://github.com/ccjohnst"
				target="_blank"
				rel="noreferrer noopener"
				alt="My GitHub logo"
			>
				<img src={github}></img>
			</a>
			<p>Email</p>
			<p>GitHub</p>
		</div>
	);
};

export default ContactIcons;
