import React, {useEffect, useRef, useState} from "react";
import weatherData from "./WeatherData";

export default function CityForecast({selectedCity}) {
    const [forecast, setForecast] = useState(null);
    const weatherDataRef = useRef(null);

    useEffect(() => {
        if (!selectedCity) {
            setForecast(null);
            return;
        };
    })
    return (
        <div>
            <h2>Weather in {selectedCity}</h2>
            <p>Weather: {forecast.summary}</p>
            <p>Details: {forecast.deatils}</p>
        </div>
    )
}