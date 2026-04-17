import type { LocationData, WeatherData } from "@/types/types";
import { LocationPicker } from "./LocationPicker";
import { useEffect, useState } from "react";
import { HistorySection } from "./HistorySection";
import { fetchWeather } from "@/api/weather";
import { OpenCloseIcon } from "./OpenCloseIcon";
import { motion } from "framer-motion";
import { Overlay } from "./Overlay";
import { AnimatePresence } from "framer-motion";

type SidebarProps = {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    weatherData: WeatherData | null;
}

const OPEN_WIDTH = 350;
const CLOSED_WIDTH = 40;

export function Sidebar({ setWeatherData, isOpen, setIsOpen, weatherData }: SidebarProps) {

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
        <>
            <AnimatePresence>
                {isOpen && weatherData && <Overlay />}
            </AnimatePresence>
            <motion.div className='absolute top-0 left-0 min-h-screen bg-[#1E1E1E] rounded-r-2xl p-4 z-30 pt-14 overflow-hidden'
                initial={{ width: OPEN_WIDTH }}
                animate={{ width: isOpen ? OPEN_WIDTH : CLOSED_WIDTH }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <OpenCloseIcon isOpen={isOpen} setIsOpen={setIsOpen} />
                <LocationPicker isOpen={isOpen} onWeatherLoad={handleWeatherLoad} setHistory={setHistory} setIsOpen={setIsOpen} />
                <HistorySection isOpen={isOpen} onWeatherLoad={handleWeatherLoad} history={history} setIsOpen={setIsOpen} />
            </motion.div>
        </>
    );
}
