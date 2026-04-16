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
    region: string;
    temperature: number;
    condition: string;
    timezone: string;
    hourly: OpenWeatherHourly[];
    daily: OpenWeatherDaily[];
    humidity: number;
    feels_like: number;
    visibility: number;
    pressure: number;
    uvi: number;
    wind_speed: number;
    cloudiness: number;
    dew_point: number;
};

export type LocationData = {
    id: string;
    cityName: string;
    region: string;
    latitude: number;
    longitude: number;
};