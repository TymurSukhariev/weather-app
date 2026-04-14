import { LocationSuggestion } from "@/types/types";
import { useId } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


type SearchbarProps = {
    query: string;
    setQuery: (query: string) => void;
    locations: LocationSuggestion[];
}

export function Searchbar({ query, setQuery, locations }: SearchbarProps) {
    const suggestionsListId = useId();

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