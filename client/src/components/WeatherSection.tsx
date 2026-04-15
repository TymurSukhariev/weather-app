import { WeatherData } from "@/types/types";


export function WeatherSection({ weatherData }: { weatherData: WeatherData | null }) {
    return (
        <div className="flex justify-center items-center border border-red-500">
            <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
            {weatherData ? (
                <div>
                    <p>Location: {weatherData.locationName}</p>
                    <p>Temperature: {weatherData.temperature}°C</p>
                    <p>Condition: {weatherData.condition}</p>
                </div>
            ) : (
                <p>Please search for a location</p>
            )}
        </div>
    );
}