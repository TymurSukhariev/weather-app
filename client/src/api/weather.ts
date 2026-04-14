export async function fetchWeather(city: string) {
    const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }

    return await response.json();
}