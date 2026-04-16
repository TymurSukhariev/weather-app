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
    daily: {
        dt: number;
        temp: {
            min: number;
            max: number;
        };
        weather: {
            icon: string;
        }[];
    }[];
    humidity: number;
    feels_like: number;
    visibility: number;
    pressure: number;
    uvi: number;
    wind_speed: number;
    cloudiness: number;
    dew_point: number;
};

export type LocationSuggestion = {
    id: string;
    cityName: string;
    region: string;
    latitude: number;
    longitude: number;
};