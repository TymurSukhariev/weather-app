export type OpenWeatherHourly = {
    dt: number;
    temp: number;
    weather: {
        icon: string;
    }[];
};

export type OpenWeatherDaily = {
    dt: number;
    temp: {
        min: number;
        max: number;
    };
    weather: {
        icon: string;
    }[];
};

export type WeatherData = {
    locationName: string;
    temperature: number;
    condition: string;
    timezone: string;
    hourly: OpenWeatherHourly[];
    daily: OpenWeatherDaily[];
};

export type LocationData = {
    id: string;
    cityName: string;
    latitude: number;
    longitude: number;
};