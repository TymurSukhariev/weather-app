// Types for server responses and data structures
export type WeatherResponse = {
    locationName: string;
    temperature: number;
    condition: string;
    timezone: string;
    hourly: {
        dt: number;
        temp: number;
        weather: {
            icon: string;
        }[];
    }[];
};

export type LocationSuggestion = {
    id: string;
    cityName: string;
    latitude: number;
    longitude: number;
};