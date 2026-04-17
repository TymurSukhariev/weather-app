import { render, screen } from "@testing-library/react";
import { WeatherSection } from "@/components/WeatherSection";
import type { WeatherData } from "@/types/types";

vi.mock("@/components/HourlyForecast", () => ({
    HourlyForecast: () => <div>Hourly Forecast Mock</div>,
}));

vi.mock("@/components/DailyForecast", () => ({
    DailyForecast: () => <div>Daily Forecast Mock</div>,
}));

vi.mock("@/components/WeatherDetails", () => ({
    WeatherDetails: () => <div>Weather Details Mock</div>,
}));

vi.mock("@/components/CurrentWeather", () => ({
    CurrentWeather: ({
        locationName,
        region,
        temperature,
        condition,
    }: {
        locationName: string;
        region: string | null;
        temperature: number;
        condition: string;
    }) => (
        <div>
            <div>{locationName}</div>
            <div>{region}</div>
            <div>{temperature}°C</div>
            <div>{condition}</div>
        </div>
    ),
}));

const mockWeatherData: WeatherData = {
    locationName: "Vilnius",
    region: "Lithuania",
    temperature: 18,
    condition: "clear sky",
    timezone: "Europe/Vilnius",
    feels_like: 17,
    humidity: 55,
    visibility: 10000,
    pressure: 1012,
    uvi: 3,
    wind_speed: 4,
    cloudiness: 10,
    dew_point: 8,
    hourly: [
        {
            dt: 1713430800,
            temp: 18,
            weather: [{ icon: "01d" }],
        },
    ] as WeatherData["hourly"],
    daily: [
        {
            dt: 1713430800,
            temp: { min: 10, max: 19 },
            weather: [{ icon: "01d" }],
        },
    ] as WeatherData["daily"],
};

test("renders weather content", () => {
    render(<WeatherSection weatherData={mockWeatherData} />);

    expect(screen.getByText("Vilnius")).toBeTruthy();
    expect(screen.getByText("Lithuania")).toBeTruthy();
    expect(screen.getByText("18°C")).toBeTruthy();
    expect(screen.getByText("clear sky")).toBeTruthy();

    expect(screen.getByText("Hourly Forecast Mock")).toBeTruthy();
    expect(screen.getByText("Daily Forecast Mock")).toBeTruthy();
    expect(screen.getByText("Weather Details Mock")).toBeTruthy();
});