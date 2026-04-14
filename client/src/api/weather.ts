export async function fetchWeather(lat: number, lon: number): Promise<any> {
    const response = await fetch(
        `/api/weather?lat=${lat}&lon=${lon}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }

    return await response.json();
}