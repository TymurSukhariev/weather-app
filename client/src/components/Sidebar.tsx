import type { LocationData, WeatherData } from "@/types/types";
import { LocationPicker } from "./LocationPicker";
import { useEffect, useState } from "react";
import { HistorySection } from "./HistorySection";

type SidebarProps = {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

export function Sidebar({ setWeatherData }: SidebarProps) {

    const [history, setHistory] = useState<LocationData[]>([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("locations") || "[]");
        setHistory(stored);
    }, []);


    return (
        <div className="absolute w-[350px] min-h-screen rounded-r-xl bg-gray-100 p-4 border border-red-300">
            <LocationPicker setWeatherData={setWeatherData} />
            <HistorySection history={history} />
        </div>
    );
}
