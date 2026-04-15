import { OpenWeatherDaily } from "../types/types";

export function mapDailyForecast(
    daily: OpenWeatherDaily[],
    timezone: string
) {
    const formatter = new Intl.DateTimeFormat("en", {
        weekday: "short",
        timeZone: timezone,
    });

    return daily.map((day, index) => {
        const date = new Date(day.dt * 1000);

        const dayLabel =
            index === 0 ? "Today" : formatter.format(date);

        return {
            day: dayLabel,
            minTemp: Math.round(day.temp.min),
            maxTemp: Math.round(day.temp.max),
            iconCode: day.weather[0]?.icon ?? "01d",
        };
    });
}