import { useState } from "react";

function App() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const res = await fetch("/api/health");
    const json = await res.json();
    setData(json);
  };

  return (
    <div>
      <h1>Test API</h1>
      <button onClick={fetchData}>Fetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;