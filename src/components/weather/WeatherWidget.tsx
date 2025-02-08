// src/components/WeatherWidget/WeatherWidget.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherWidget.css";

interface WeatherData {
    temperature: number;
    description: string;
    icon: string;
    city: string;
    country: string;
}

const WeatherWidget: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        if (!API_KEY) {
            setError(
                "API key is missing. Please set your API key in the .env file.",
            );
            setLoading(false);
            return;
        }

        const fetchWeather = async (latitude: number, longitude: number) => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather`,
                    {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            units: "metric",
                            appid: API_KEY,
                        },
                    },
                );

                const data = response.data;
                setWeather({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon,
                    city: data.name,
                    country: data.sys.country,
                });
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch weather data.");
            } finally {
                setLoading(false);
            }
        };

        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
        };

        const handleError = (error: GeolocationPositionError) => {
            let errorMessage = "";

            switch (error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage =
                        "Permission denied. Please allow location access.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    errorMessage =
                        "The request to get your location timed out.";
                    break;
                default:
                    errorMessage = "An unknown error occurred.";
                    break;
            }

            setError(errorMessage);
            setLoading(false);
        };

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
        } else {
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError,
            );
        }
    }, [API_KEY]);

    if (loading) {
        return <div className='weather-widget'>Loading...</div>;
    }

    if (error || !weather) {
        return (
            <div className='weather-widget'>{error || "No data available"}</div>
        );
    }

    // Determine units and temperature based on the country
    const isUS = weather.country === "US";
    const temperature = isUS
        ? (weather.temperature * 9) / 5 + 32 // Convert Celsius to Fahrenheit
        : weather.temperature;
    const unitSymbol = isUS ? "°F" : "°C";

    return (
        <div className='weather-widget'>
            <div className='weather-header'>
                {weather.city}, {weather.country}
            </div>
            <div className='weather-info'>
                <img
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt={weather.description}
                />
                <div className='weather-details'>
                    <div className='temperature'>
                        {temperature.toFixed(1)}
                        {unitSymbol}
                    </div>
                    <p className='description'>{weather.description}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherWidget;
