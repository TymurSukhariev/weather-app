import { useState } from "react";
import { fetchWeather } from "./api/weather";

function App() {
  const [data, setData] = useState<any>(null);

  const handleFetchData = async () => {
    const weatherData = await fetchWeather("New York");
    setData(weatherData);
  };

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