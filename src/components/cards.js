import React from "react";
import { cardsContainer } from "./cards.module.css";
import uniqid from "uniqid";

const Card = ({
	projectName,
	description,
	altText,
	imgSrc,
	techs,
	webUrl,
	codeUrl,
}) => {
	const techItems = techs.map((tech) => <li key={uniqid()}>{tech}</li>);

	const [open, setOpen] = React.useState(false);

	const handleClick = (e) => {
		setOpen(!open);
	};

	return (
		<div className={cardsContainer}>
			<img src={imgSrc} alt={altText} width="150" height="150"></img>
			<h3>{projectName}</h3>
			<p>{description}</p>
			<button onClick={() => handleClick()}>
				{!open ? "View more" : "View less"}
			</button>
			{open ? (
				<>
					<a href={webUrl} target="_blank" rel="noreferrer noopener">
						Website
					</a>
					<a href={codeUrl} target="_blank" rel="noreferrer noopener">
						Code
					</a>
					<p>Technologies used</p>
					<ul>{techItems}</ul>
				</>
			) : null}
		</div>
	);
};

export default Card;
