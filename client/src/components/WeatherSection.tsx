import { WeatherData } from "@/types/types";
import { HourlyForecast } from "./HourlyForecast";
import { mapHourlyForecast } from "@/utils/mapHourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { mapDailyForecast } from "@/utils/mapDailyForecast";
import { WeatherDetails } from "./WeatherDetails";


export function WeatherSection({ weatherData }: { weatherData: WeatherData | null }) {
    const mappedHourly = mapHourlyForecast(weatherData?.hourly || [], weatherData?.timezone || "UTC");
    const mappedDaily = mapDailyForecast(weatherData?.daily || [], weatherData?.timezone || "UTC");

    return (
        <div>
            <div>
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
            <HourlyForecast items={mappedHourly} />
            <DailyForecast items={mappedDaily} />
            <WeatherDetails weatherData={weatherData} />
        </div>
    );
}