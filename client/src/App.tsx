import { useEffect, useState } from "react";
import { fetchWeather } from "./api/weather";
import { fetchLocations } from "./api/locations";

function App() {
  const [data, setData] = useState<any>(null);

  const handleFetchData = async () => {
    const weatherData = await fetchWeather(54.6872, 25.2797); // Example coordinates for Vilnius
    setData(weatherData);
  };

  useEffect(() => {
    const fetchLocationsData = async () => {
      const locations = await fetchLocations("Vi");
      console.log(locations);
    };
    fetchLocationsData();
  }, []);

  return (
    <div>
      <h1>Test API</h1>
      <button onClick={handleFetchData}>Fetch</button>
      {data && (
        <div>
          <h2>Weather Data:</h2>
          <p>Location: {data.locationName}</p>
          <p>Temperature: {data.temperature}°C</p>
          <p>Condition: {data.condition}</p>
        </div>
      )}
    </div>
  );
}

export default App;