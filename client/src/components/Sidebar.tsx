import type { WeatherData } from "@/types/types";
import { LocationPicker } from "./LocationPicker";

type SidebarProps = {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

export function Sidebar({ setWeatherData }: SidebarProps) {

    return (
        <div className="absolute w-[350px] min-h-screen rounded-r-xl bg-gray-100 p-4 border border-red-300">
            <LocationPicker setWeatherData={setWeatherData} />
        </div>
    );
}
