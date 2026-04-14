import axios from "axios";



export type WeatherResult = {
    locationName: string;
    temperature: number;
    condition: string;
};

export async function fetchWeatherFromAPI(lat: number, lon: number): Promise<WeatherResult> {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const response = await axios.get(
        "https://api.openweathermap.org/data/3.0/onecall",
        {
            params: {
                lat: lat,
                lon: lon,
                appid: API_KEY,
                units: "metric",
            },
        }
    );

    const data = response.data;

    return {
        locationName: `Lat: ${lat}, Lon: ${lon}`,
        temperature: Math.round(data.current.temp),
        condition: data.current.weather[0].description,
    };
}