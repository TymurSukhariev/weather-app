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



**Short description:**
- User types a location
- Suggestions appear dynamically
- Selecting a location triggers weather fetch

### 🌤 Current Weather View

**Short description:**
- Displays selected location
- Shows temperature, condition, and date
- Includes visual weather icon

### 🕒 Forecast Section


**Short description:**
- Hourly and daily forecasts
- Horizontally scrollable hourly view
- Clean, card-based layout

### 📌 Search History

**Short description:**
- Recently searched locations
- Stored in localStorage
- Quick access for repeated searches

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