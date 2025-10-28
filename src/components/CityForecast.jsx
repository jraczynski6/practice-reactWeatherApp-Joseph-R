import React, { useEffect, useRef, useState } from "react";
import weatherData from "./WeatherData";

export default function CityForecast({ selectedCity }) {
    const [forecast, setForecast] = useState(null);
    const weatherDataRef = useRef(null);

    useEffect(() => {
        if (!selectedCity) {
            setForecast(null);
            return;
        };

        setForecast(
            weatherData[selectedCity]
        );
    }, [selectedCity]);

    // important if forecast is null. 
    if (!selectedCity || !forecast) return null;

    // check for typos and case sensitivity more
    const handleScrollToDetails = () => {
        weatherDataRef.current.scrollIntoView()
    };

    return (
        <div>
            <h2>Weather in {selectedCity}</h2>
            <p>Weather: {forecast.summary}</p>
            <button onClick={handleScrollToDetails}>View Details</button>
            <div ref={weatherDataRef} style={{marginTop: "500px"}}>
            <p>Details: {forecast.details}</p>
            </div>
        </div>
    )
}