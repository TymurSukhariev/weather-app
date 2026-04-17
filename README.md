# Weather App 🌤

A web application that allows users to search for a location and view current weather information along with forecasts.

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TymurSukhariev/weather-app.git
cd weather-app
```

### 2. Install dependencies

**Client**

```bash
cd client
npm install
```

**Server**

```bash
cd ../server
npm install
```

### 3. Setup environment variables

Create a `.env` file in the `server` folder:

```env
WEATHER_API_KEY=your_api_key_here
MAPBOX_API_KEY=your_api_key_here
```

### 4. Run the project

**Start backend**

```bash
cd server
npm run dev
```

**Start frontend**

```bash
cd client
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## 🧪 Run tests

```bash
cd client
npx vitest     
```

---

## 🚀 Features
 
- 🔍 Location search with autocomplete
- 🌡 Current weather conditions
- 🕒 Hourly forecast
- 📅 Daily forecast
- 📌 Search history (persisted in localStorage)
- 🎨 Responsive UI with modern design (for both small desktop and large desktop)
- ⚡ Smooth animations (Framer Motion)
- 🧪 Basic test coverage (Vitest)

---

## 📸 Screenshots


### 🔍 Search & Autocomplete
<img width="349" height="357" alt="Screenshot 2026-04-17 at 15 27 28" src="https://github.com/user-attachments/assets/dc62e17f-5523-4a32-902b-a26e4ea075fd" />

**Short description:**
- User types a location
- Suggestions appear dynamically
- Selecting a location triggers weather fetch

### 🌤 Current Weather View
<img width="444" height="292" alt="Screenshot 2026-04-17 at 15 28 06" src="https://github.com/user-attachments/assets/1daff365-4776-4422-a362-685941e6fd06" />

**Short description:**
- Displays selected location
- Shows temperature, condition, and date
- Includes visual weather icon

### 🕒 Forecast Section
<img width="1351" height="725" alt="Screenshot 2026-04-17 at 15 22 53" src="https://github.com/user-attachments/assets/cbf27775-a1b5-49e7-8dc4-d42d569db3ea" />

**Short description:**
- Hourly and daily forecasts
- Horizontally scrollable hourly view
- Clean, card-based layout

### 📌 Search History
<img width="344" height="141" alt="Screenshot 2026-04-17 at 15 29 58" src="https://github.com/user-attachments/assets/e98aedb5-b3d0-4e30-81d4-c28c2f644c36" />

**Short description:**
- Recently searched locations
- Stored in localStorage
- Quick access for repeated searches with a click opportunity

---


## ⚖️ Assumptions

- Weather API provides accurate and consistent data
- User searches primarily for cities
- Network latency is acceptable for real-time fetching
- Desktop-first design with responsive adaptation

---

## ⚖️ Tradeoffs

- Used localStorage instead of backend persistence for simplicity
- Basic error handling instead of full error UI system
- Debounced search implemented manually instead of using a library
- Limited test coverage focused on critical flows only

---

## ⚠️ Known Limitations

- No authentication or user-specific data persistence
- Limited accessibility improvements (can be expanded)
- Weather icons depend on API-provided codes
- No offline support
- API rate limits may affect heavy usage
