import axios from "axios";
import { WeatherResponse } from "../types/types";


export async function fetchWeatherFromAPI(lat: number, lon: number): Promise<WeatherResponse> {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const response = await axios.get(
        "https://api.openweathermap.org/data/3.0/onecall",
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric",
            },
        }
    );

    const data = response.data;
    // return data;
    return {
        locationName: `Lat: ${lat}, Lon: ${lon}`,
        temperature: Math.round(data.current.temp),
        condition: data.current.weather[0].description,
        hourly: data.hourly.slice(0, 24),
        timezone: data.timezone,
        daily: data.daily.slice(0, 7),
        humidity: data.current.humidity,
        feels_like: Math.round(data.current.feels_like),
        visibility: data.current.visibility,
        pressure: data.current.pressure
    };
}