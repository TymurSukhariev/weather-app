import { useEffect, useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { WeatherSection } from "./components/WeatherSection";
import { WeatherData } from "./types/types";
import { fetchWeather } from "./api/weather";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);


  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Background images: */}
      <img className="absolute top-[-600px] 2xl:top-[-550px] right-[-600px] 2xl:right-[-550px] pointer-events-none" src="Ellipse.svg" />
      <img className="absolute bottom-[-600px] 2xl:bottom-[-550px] left-[-600px] 2xl:left-[-550px] pointer-events-none" src="Ellipse2.svg" />

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


