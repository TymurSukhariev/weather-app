import { WeatherData } from "@/types/types";

export function WeatherDetails({ weatherData }: { weatherData: WeatherData | null }) {
    if (!weatherData) return null;

    return (
        <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Additional Details</h3>
            <p>Feels Like: {weatherData.feels_like}°C</p>
            <p>Humidity: {weatherData.humidity}%</p>
            <p>Visibility: {weatherData.visibility / 1000} km</p>
            <p>Pressure: {weatherData.pressure} hPa</p>
        </div>
    );
}