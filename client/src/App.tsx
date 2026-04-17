import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { WeatherSection } from "./components/WeatherSection";
import { WeatherData } from "./types/types";
import { fetchWeather } from "./api/weather";
import { SearchPlaceholder } from "./components/SearchPlaceholder";
import { Loader } from "./components/Loader";
import { ErrorBlock } from "./components/Error";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen overflow-hidden relative">
      {/* Background images: */}
      <img className="absolute top-[-600px] 2xl:top-[-550px] right-[-600px] 2xl:right-[-550px] pointer-events-none" src="Ellipse.svg" />
      <img className="absolute bottom-[-600px] 2xl:bottom-[-550px] left-[-600px] 2xl:left-[-550px] pointer-events-none" src="Ellipse2.svg" />

      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setWeatherData={setWeatherData}
        weatherData={weatherData}
        setIsWeatherLoading={setIsWeatherLoading}
        setError={setError}
      />

      {isWeatherLoading ? (
        <Loader />
      ) : error ? (
        <ErrorBlock message={error} />
      ) : weatherData ? (
        <WeatherSection weatherData={weatherData} />
      ) : (
        <SearchPlaceholder isOpen={isOpen} />
      )}
    </div>
  );
}

export default App;

