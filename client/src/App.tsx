import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { WeatherSection } from "./components/WeatherSection";
import { WeatherData } from "./types/types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <div>
      <Sidebar setWeatherData={setWeatherData} />
      <WeatherSection weatherData={weatherData} />
    </div>
  );
}

export default App;