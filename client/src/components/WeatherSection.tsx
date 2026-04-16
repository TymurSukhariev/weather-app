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
        <div className="py-6 px-16 flex flex-col gap-6 items-center w-full 2xl:w-[1700px] mx-auto justify-center z-10">
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

            <div className="grid w-full gap-6 grid-cols-[1.2fr_1.8fr]">
                <DailyForecast items={mappedDaily} />
                <WeatherDetails weatherData={weatherData} />
            </div>
        </div>
    );
}
