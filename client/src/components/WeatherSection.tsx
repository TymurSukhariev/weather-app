import { WeatherData } from "@/types/types";
import { HourlyForecast } from "./HourlyForecast";
import { mapHourlyForecast } from "@/utils/mapHourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { mapDailyForecast } from "@/utils/mapDailyForecast";
import { WeatherDetails } from "./WeatherDetails";
import { getCurrentDate } from "@/utils/getCurrentFormattedDate";



export function WeatherSection({ weatherData }: { weatherData: WeatherData | null }) {
    const mappedHourly = mapHourlyForecast(weatherData?.hourly || [], weatherData?.timezone || "UTC");
    const mappedDaily = mapDailyForecast(weatherData?.daily || [], weatherData?.timezone || "UTC");
    const currentLocalDate = getCurrentDate(weatherData?.timezone || "UTC");
    const icon = weatherData?.hourly[0]?.weather[0]?.icon;

    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
                {weatherData ? (
                    <div>
                        <p>Location: {weatherData.locationName}</p>
                        <p>Temperature: {weatherData.temperature}°C</p>
                        <p>Condition: {weatherData.condition}</p>
                        <img src={`/weather-icons/${icon}.png`} alt="Weather icon" />
                        <div>
                            <p className="text-white">{currentLocalDate.weekday}</p>
                            <p className="text-white">{currentLocalDate.date}</p>
                        </div>
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

function getCurrentFormattedDate(arg0: string) {
    throw new Error("Function not implemented.");
}
