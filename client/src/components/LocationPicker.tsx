import { LocationData } from "@/types/types";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { fetchLocations } from "@/api/locations";


type LocationPickerProps = {
    onWeatherLoad: (location: LocationData) => void;
    setHistory: React.Dispatch<React.SetStateAction<LocationData[]>>;
}

export function LocationPicker({ onWeatherLoad, setHistory }: LocationPickerProps) {
    const suggestionsListId = useId();

    const containerRef = useRef<HTMLDivElement>(null);

    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [locations, setLocations] = useState<LocationData[]>([]);

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

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setLocations([]);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    function saveLocation(location: LocationData) {
        const existing: LocationData[] = JSON.parse(
            localStorage.getItem("locations") || "[]"
        );

        const filtered = existing.filter((l) => l.id !== location.id);

        const updated = [location, ...filtered].slice(0, 5); // keep last 5

        localStorage.setItem("locations", JSON.stringify(updated));
        setHistory(updated);
    }

    function handlePickLocation(location: LocationData) {
        setQuery('');
        setLocations([]);
        onWeatherLoad(location);
        saveLocation(location);
    }

    return (
        <div ref={containerRef}>
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
                                onClick={() => {
                                    handlePickLocation(location);
                                }}
                            >
                                {location.cityName}
                            </Button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

