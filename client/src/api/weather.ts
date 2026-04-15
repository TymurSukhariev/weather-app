import { WeatherData } from "@/types/types";


export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
    const response = await fetch(
        `/api/weather?lat=${lat}&lon=${lon}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }

    return await response.json();
}