import * as React from "react";
import Obfuscate from "react-obfuscate";
import proton from "./protonmail-sign-dark.png";
import github from "./GitHub-Mark-32px.png";
import { contactContainer } from "./contact.module.css";

const ContactIcons = () => {
	return (
		<div className={contactContainer}>
			<Obfuscate email="christopherjohnston@protonmail.com">
				<img
					src={proton}
					width="23px"
					height="32.5px"
					alt="Protonmail logo"
				></img>{" "}
			</Obfuscate>
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
