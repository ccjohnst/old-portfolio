import * as React from "react";
import Obfuscate from "react-obfuscate";
import proton from "./protonmail-sign-dark.png";
import github from "./GitHub-Mark-32px.png";
import twitter from "./twitter.svg";
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
			>
				<img src={github} alt="My GitHub logo"></img>
			</a>
			<a
				href="https://twitter.com/cccjohnston"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					src={twitter}
					alt="twitter logo"
					width="40px"
					height="32.5px"
				></img>
			</a>
			<p>Email</p>
			<p>GitHub</p>
			<p>Twitter</p>
		</div>
	);
};

export default ContactIcons;
