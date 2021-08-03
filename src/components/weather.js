import React, { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		fetch(url).then((response) =>
			response.json().then((data) => {
				const item = data["weather"][0]["icon"];
				setData(item);
				setLoading(false);
			})
		);
	}, []);

	return { data, loading };
};
const WeatherIcon = () => {
	const { data, loading } = useFetch(
		"https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=891ddda0b4720fad959806ec96f4a8dd"
	);
	const img = `https://openweathermap.org/img/wn/${data}@2x.png`;
	// console.log(img);
	return (
		<>
			{loading ? (
				<div>...loading weather</div>
			) : (
				<img width="40px" height="40px" src={img}></img>
			)}
		</>
	);
};

export default WeatherIcon;
