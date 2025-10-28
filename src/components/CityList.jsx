import React from "react";

export default function CityList({selectedCity}) {
    const cities = ["New York", "London", "Tokyo"];
    return (
        <div>
            <h1>Choose city</h1>
            <ul>
                {cities.map((city) => (
                    <li key={city} onClick={() => on(city)}>
                        {city}
                    </li>
                ))}
            </ul>
        </div>
    )
}
