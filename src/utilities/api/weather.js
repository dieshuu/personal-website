const API_BASE = "https://api.openweathermap.org/data/2.5/weather";

export async function getCurrentWeather({ lat, lon, units = "imperial "}) {
    const key = import.meta.env.VITE_OPENWEATHER_KEY;
    if (!key) {
        throw new Error("Missing OpenWeather key.");
    }

    const url = `${API_BASE}?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

    const res = await fetch(url);
    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Weather fetch failed: ${res.status} ${text}`);
    }
    const data = await res.json();

    const weatherInfo = Array.isArray(data.weather) && data.weather.length > 0 ? data.weather[0] : {};
    const description = weatherInfo.description ?? "—";

    return {
        temp: Math.round(data.main?.temp ?? 0),
        description, 
        city: (data.name ?? "").toLowerCase(),
        country: (data.sys?.country ?? "").toLowerCase(),
        raw: data
    };
}