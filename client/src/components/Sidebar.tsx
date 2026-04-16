import type { LocationData, WeatherData } from "@/types/types";
import { LocationPicker } from "./LocationPicker";
import { useEffect, useState } from "react";
import { HistorySection } from "./HistorySection";
import { fetchWeather } from "@/api/weather";

type SidebarProps = {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

export function Sidebar({ setWeatherData }: SidebarProps) {

    const [history, setHistory] = useState<LocationData[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("locations") || "[]");
        setHistory(stored);
    }, []);

    async function handleWeatherLoad(location: LocationData) {
        const weather: WeatherData = await fetchWeather(location.latitude, location.longitude);

        setWeatherData({
            ...weather,
            locationName: location.cityName,
            region: location.region,
        });
    };


    return (
        <div className="w-[350px] min-h-screen rounded-r-xl bg-gray-100 p-4">
            <LocationPicker onWeatherLoad={handleWeatherLoad} setHistory={setHistory} />
            <HistorySection onWeatherLoad={handleWeatherLoad} history={history} />
        </div>
    );
}
