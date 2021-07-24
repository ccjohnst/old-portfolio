import * as React from "react";
import { cardsContainer } from "./cards.module.css";

const Card = ({ projectName, description, altText, imgSrc }) => {
	return (
		<div className={cardsContainer}>
			<img src={imgSrc} alt={altText} width="150" height="150"></img>
			<h3>{projectName}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Card;
