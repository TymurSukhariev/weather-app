import { LocationSuggestion, WeatherData } from "@/types/types";
import { useEffect, useId, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { fetchWeather } from "@/api/weather";
import { fetchLocations } from "@/api/locations";


type LocationPickerProps = {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData | null>>;
}

export function LocationPicker({ setWeatherData }: LocationPickerProps) {
    const suggestionsListId = useId();

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

    async function handleSetWeather(location: LocationSuggestion) {
        if (location) {
            const weather: WeatherData = await fetchWeather(location.latitude, location.longitude);
            setWeatherData({
                locationName: location.cityName,
                temperature: weather.temperature,
                condition: weather.condition
            });
        }

    };

    return (
        <>
            <Input
                placeholder="Search city..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search city"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded={locations.length > 0}
                aria-controls={locations.length > 0 ? suggestionsListId : undefined}
            />
            {locations.length > 0 && (
                <ul
                    id={suggestionsListId}
                    role="listbox"
                    aria-label="Location suggestions"
                    className="top-full z-50 mt-1 max-h-64 w-full overflow-y-auto rounded-md border bg-white shadow"
                >
                    {locations.map((location) => (
                        <li key={location.id} role="option" aria-selected={false}>
                            <Button
                                type="button"
                                className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                                aria-label={`Select ${location.cityName}`}
                                onClick={() => handleSetWeather(location)}
                            >
                                {location.cityName}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
