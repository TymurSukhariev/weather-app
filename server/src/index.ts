import express from "express";
import cors from "cors";
import dotenv from "dotenv";

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
    const city = req.query.city as string;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    res.json({
        locationName: city,
        temperature: 15,
        condition: "Sunny",
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});