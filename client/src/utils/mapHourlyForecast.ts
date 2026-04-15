import { OpenWeatherHourly } from "../types/types";

export function mapHourlyForecast(
    hourly: OpenWeatherHourly[],
    timezone: string
) {
    return hourly.map((hour, index) => {
        const date = new Date(hour.dt * 1000);

        const timeLabel =
            index === 0
                ? "Now"
                : new Intl.DateTimeFormat("en", {
                    hour: "numeric",
                    hour12: false,
                    timeZone: timezone,
                }).format(date);

        return {
            timeLabel,
            temperature: Math.round(hour.temp),
            iconCode: hour.weather[0]?.icon ?? "01d",
        };
    });
}