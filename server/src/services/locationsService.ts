import axios from "axios";
import { LocationSuggestion } from "../types/types";

type MapboxLocationFeature = {
    id: string;
    properties: {
        full_address: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
};

type MapboxLocationsResponse = {
    features: MapboxLocationFeature[];
};

export async function fetchLocations(q: string): Promise<LocationSuggestion[]> {
    const API_KEY = process.env.MAPBOX_API_KEY;
    const response = await axios.get<MapboxLocationsResponse>(
        "https://api.mapbox.com/search/geocode/v6/forward",
        {
            params: {
                q,
                types: "place",
                access_token: API_KEY,
                limit: 10
            },
        }

    )
    return response.data.features.map((feature) => ({
        id: feature.id,
        cityName: feature.properties.full_address,
        latitude: feature.properties.coordinates.latitude,
        longitude: feature.properties.coordinates.longitude,
    }));
}
