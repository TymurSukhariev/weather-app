import { WeatherData } from "@/types/types";
import { WeatherDetailBlock } from "./WeatherDetailBlock";

export function WeatherDetails({ weatherData }: { weatherData: WeatherData | null }) {
    if (!weatherData) return null;

    const details = [
        { label: "Feels Like", value: `${weatherData.feels_like}°C`, icon: "thermometer" },
        { label: "Humidity", value: `${weatherData.humidity}%`, icon: "water" },
        { label: "Visibility", value: `${weatherData.visibility / 1000} km`, icon: "eye" },
        { label: "Pressure", value: `${weatherData.pressure} hPa`, icon: "gauge" },
        { label: "UV Index", value: `${weatherData.uvi} uv`, icon: "uv" },
        { label: "Wind Speed", value: `${weatherData.wind_speed} m/s`, icon: "wind" },
        { label: "Cloudiness", value: `${weatherData.cloudiness}%`, icon: "cloud" },
        { label: "Dew Point", value: `${weatherData.dew_point}°C`, icon: "droplet" },
    ];

    return (
        <div className="mt-4 rounded-2xl bg-[#1E1E1E] grid grid-cols-4 gap-3 p-4">
            <h2 className="col-span-4 text-xl text-white">Weather Details</h2>
            {details.map((detail) => (
                <WeatherDetailBlock
                    key={detail.label}
                    label={detail.label}
                    value={detail.value}
                    icon={detail.icon}
                />
            ))}
        </div>
    );
}