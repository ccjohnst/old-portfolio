import * as React from "react";
import Layout from "../components/layout.js";
import Navigation from "../components/navigation.js";
import Card from "../components/cards.js";
import cv from "../components/cv-creator.png";
import cc from "../components/cc.png";
import WeatherIcon from "../components/weather.js";

import { bio, project, contact } from "../components/layout.module.css";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home">
			<Navigation></Navigation>
			<div className={bio} id={bio}>
				<p> i am a frontend developer from london</p> <WeatherIcon />
			</div>
			<div className={project} id={project}>
				<p>Here are my projects</p>
				<Card
					projectName="CV Creator"
					description="A CV making tool"
					imgSrc={cv}
				/>
				<Card
					projectName="C Cooperson"
					description="A mock Architects Website"
					imgSrc={cc}
				/>
			</div>
			<div className={contact} id={contact}>
				Contact me on
			</div>
		</Layout>
	);
};

export default IndexPage;
