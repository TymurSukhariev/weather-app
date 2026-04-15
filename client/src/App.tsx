import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { WeatherSection } from "./components/WeatherSection";
import { WeatherData } from "./types/types";
import { fetchWeather } from "./api/weather";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <div className="flex border border-red-500">
      <Sidebar setWeatherData={setWeatherData} />
      {weatherData ?
        <WeatherSection weatherData={weatherData} /> :
        <div className="flex-1 flex justify-center items-center">
          <p className="text-gray-500">Search for a location to see the weather information</p>
        </div>}
    </div>
  );
}

export default App;