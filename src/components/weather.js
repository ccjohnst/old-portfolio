import React, { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		fetch(url).then((response) =>
			response.json().then((data) => {
				const [item] = data.name[0];
				setData(item);
				setLoading(false);
				console.log(data);
			})
		);
	}, []);

	return { data, loading };
};
const WeatherIcon = () => {
	const { data, loading } = useFetch(
		"http://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=891ddda0b4720fad959806ec96f4a8dd"
	);

	// console.log(data);
	return <>{loading ? <div>...loading weather</div> : <div>{data}</div>}</>;
};

export default WeatherIcon;
