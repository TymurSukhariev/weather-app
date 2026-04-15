export type WeatherData = {
    locationName: string;
    temperature: number;
    condition: string;
};

export type LocationData = {
    id: string;
    cityName: string;
    latitude: number;
    longitude: number;
};