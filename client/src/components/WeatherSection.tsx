import { WeatherData } from "@/types/types";
import { HourlyForecast } from "./HourlyForecast";
import { mapHourlyForecast } from "@/utils/mapHourlyForecast";
import { DailyForecast } from "./DailyForecast";
import { mapDailyForecast } from "@/utils/mapDailyForecast";
import { WeatherDetails } from "./WeatherDetails";
import { getCurrentDate } from "@/utils/getCurrentFormattedDate";
import { CurrentWeather } from "./CurrentWeather";



export function WeatherSection({ weatherData }: { weatherData: WeatherData | null }) {
    const mappedHourly = mapHourlyForecast(weatherData?.hourly || [], weatherData?.timezone || "UTC");
    const mappedDaily = mapDailyForecast(weatherData?.daily || [], weatherData?.timezone || "UTC");
    const currentLocalDate = getCurrentDate(weatherData?.timezone || "UTC");
    const icon = weatherData?.hourly[0]?.weather[0]?.icon;

    return (
        <div className="py-6 px-10 flex flex-col gap-6 items-center w-full 2xl:w-[1700px] mx-auto border border-yellow-500">
            <div className="flex gap-6 w-full justify-between">
                <CurrentWeather
                    temperature={weatherData?.temperature || 0}
                    condition={weatherData?.condition || "N/A"}
                    locationName={weatherData?.locationName || "Unknown"}
                    region={weatherData?.region || null}
                    weekday={currentLocalDate.weekday}
                    date={currentLocalDate.date}
                    icon={icon || "01d"}
                />
                <HourlyForecast items={mappedHourly} />
            </div>
            {/* <DailyForecast items={mappedDaily} /> */}
            <div className="flex justify-between border border-red-500 w-full">
                <div className="w-[400px] bg-green-500 h-[340px] rounded-2xl"></div>
                <WeatherDetails weatherData={weatherData} />
            </div>
        </div>
    );
}
