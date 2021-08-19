import * as React from "react";
// Components
import Layout from "../components/layout.js";
import Navigation from "../components/navigation.js";
import Card from "../components/cards.js";

// Portfolio thumbnails
import cv from "../components/cv-creator.png";
import cc from "../components/cc.png";
import tm from "../components/tm-marketing.png";
import folio from "../components/portfolio.png";

// Bio picture
import cj from "../components/cjretro.png";
// Contact section icons
import WeatherIcon from "../components/weather.js";
import ContactIcons from "../components/contact.js";

// CSS modules
import {
	bio,
	project,
	contact,
	weatherContainer,
	weatherCity,
	technologies,
} from "../components/layout.module.css";

// Portfolio code & website URLs
const cvUrl = `https://ccjohnst.github.io/cv-creator/`;
const cvCode = `https://github.com/ccjohnst/cv-creator`;
const coopersonUrl = `https://cooperson-clarke.vercel.app/`;
const coopersonCode = `https://github.com/ccjohnst/cooperson-clarke`;
const portfolioURL = `https://christopherjohnston.co.uk`;
const portfolioCode = `https://github.com/ccjohnst/portfolio`;
const trueMarketingUrl = `https://ccjohnst.github.io/true-marketing/#/`;
const trueMarketingCode = `https://github.com/ccjohnst/true-marketing`;

const IndexPage = () => {
	return (
		<Layout pageTitle="Chris Johnston - Frontend Developer">
			{/* Navigation bar cpomonent */}
			<Navigation></Navigation>
			<div className={bio} id={bio}>
				<img
					src={cj}
					alt="A picture of myself in pixel art"
					width="150px"
					height="150px"
				></img>
				<h2>Chris Johnston</h2>

				<p>
					{" "}
					I am a frontend developer from{" "}
					{/* Weather Container displays current weather icon above the cityName */}
					<div className={weatherContainer}>
						<WeatherIcon />
						<p className={weatherCity}>London</p>
					</div>
				</p>
				<p>Technologies that I use are: </p>
				<ul className={technologies}>
					<li>Javascript</li>
					<li>React</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
			<div className={project} id={project}>
				{/* Card components that contain my project details */}
				<h2>Projects</h2>
				<p>A selection of recent projects I have made can be seen below:</p>
				<Card
					projectName="Mock Marketing Website"
					description="A website for a mock marketing company built using React, Chakra UI framework and mobile first design."
					imgSrc={tm}
					techs={["Javascript", "React", "Chakra UI"]}
					webUrl={trueMarketingUrl}
					codeUrl={trueMarketingCode}
				/>
				<Card
					projectName="CV Creator"
					description="A CV making tool that makes good use of React's state management and features an option to save the CV as a PDF."
					imgSrc={cv}
					techs={["Javascript", "React", "Sass"]}
					webUrl={cvUrl}
					codeUrl={cvCode}
				/>
				<Card
					projectName="Mock Architects Website"
					description="A mock Architects Website built with NextJS and vanilla CSS."
					imgSrc={cc}
					techs={["Javascript", "React", "NextJS"]}
					webUrl={coopersonUrl}
					codeUrl={coopersonCode}
				/>
				<Card
					projectName="Portfolio"
					description="A simple portfolio website built using GatsbyJS."
					imgSrc={folio}
					techs={["Javascript", "React", "GatsbyJS"]}
					webUrl={portfolioURL}
					codeUrl={portfolioCode}
				/>
			</div>
			<div className={contact} id={contact}>
				<h2>Contact</h2>
				For all enquiries, please feel free to contact me via the links below.
				<ContactIcons />
			</div>
		</Layout>
	);
};

export default IndexPage;
