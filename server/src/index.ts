import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fetchWeatherFromAPI } from "./services/weatherService";

dotenv.config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
    res.send("Server is running");
});

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/weather", async (req, res) => {
    const lon = parseFloat(req.query.lon as string);
    const lat = parseFloat(req.query.lat as string);

    if (isNaN(lon) || isNaN(lat)) {
        return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    try {
        const weather = await fetchWeatherFromAPI(lat, lon);
        res.json(weather);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch weather" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});