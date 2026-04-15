export type WeatherData = {
    locationName: string;
    temperature: number;
    condition: string;
};

export type LocationSuggestion = {
    id: string;
    cityName: string;
    latitude: number;
    longitude: number;
};