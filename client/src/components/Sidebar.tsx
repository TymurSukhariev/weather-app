import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { fetchLocations } from "@/api/locations";
import type { LocationSuggestion, WeatherData } from "@/types/types";
import { LocationPicker } from "./LocationPicker";

export function Sidebar({ setWeatherData }: { setWeatherData: (data: WeatherData) => void }) {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [locations, setLocations] = useState<LocationSuggestion[]>([]);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setDebouncedQuery(query);
        }, 200);

        return () => window.clearTimeout(timeout);
    }, [query]);

    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setLocations([]);
            return;
        }

        const fetchLocationsData = async () => {
            try {
                const results = await fetchLocations(debouncedQuery);
                setLocations(results);
            } catch (error) {
                console.error(error);
                setLocations([]);
            }
        };

        fetchLocationsData();
    }, [debouncedQuery]);

    return (
        <div className="absolute w-[350px] min-h-screen rounded-r-xl bg-gray-100 p-4 border border-red-300">
            {/* <div className="relative w-[300px]"> */}
            <LocationPicker
                query={query}
                setQuery={setQuery}
                locations={locations}
                setWeatherData={setWeatherData}
            />
            {/* </div> */}
        </div>
    );
}