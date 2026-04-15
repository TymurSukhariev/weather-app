import { WeatherData } from "@/types/types";
import { HourlyForecast } from "./HourlyForecast";
import { mapHourlyForecast } from "@/utils/mapHourlyForecast";


export function WeatherSection({ weatherData }: { weatherData: WeatherData | null }) {
    const mappedItems = mapHourlyForecast(weatherData?.hourly || [], weatherData?.timezone || "UTC");

    return (
        <div>
            <div className="">
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
            <HourlyForecast items={mappedItems} />
        </div>
    );
}