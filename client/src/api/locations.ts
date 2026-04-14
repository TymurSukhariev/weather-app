import { LocationSuggestion } from "@/types/types";


export async function fetchLocations(q: string): Promise<LocationSuggestion[]> {
    const response = await fetch(
        `/api/locations?q=${encodeURIComponent(q)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch locations");
    }

    return await response.json();
}