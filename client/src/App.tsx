import { useEffect, useState } from "react";
import { fetchWeather } from "./api/weather";
import { fetchLocations } from "./api/locations";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [data, setData] = useState<any>(null);

  const handleFetchData = async () => {
    const weatherData = await fetchWeather(54.6872, 25.2797); // Example coordinates for Vilnius
    setData(weatherData);
  };
  return (
    <>
      <Sidebar />
    </>
  );
}

export default App;