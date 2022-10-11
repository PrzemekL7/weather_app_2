const API_KEY = 'cbcaf9f0dfac4765852112253220410';
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';


export async function getWeatherFromApi (city) {
const config = {
    key: API_KEY,
    q: city,
    days: 7,
    aqi: "no",
    alerts: "no",
}

    const response = await fetch(`${BASE_URL}?${new URLSearchParams(config)}`)
    .catch((error) => {
        console.log(error)
    })
    return response.json()
}