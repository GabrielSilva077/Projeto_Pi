const axios = require("axios");

async function buscarClimaPorCoordenadas({ lat, lon, dias, lang = "pt" }) {
  try {
    const resp = await axios.get("https://api.weatherapi.com/v1/forecast.json", {
      params: {
        key: process.env.OPENWEATHERMAP_API_KEY,
        q: `${lat},${lon}`,
        days: dias,
        lang,
      },
    });

    return resp.data.forecast.forecastday;
  } catch (error) {
    console.error("Erro ao buscar clima na WeatherAPI:", error.message);
    throw error;
  }
}

module.exports = { buscarClimaPorCoordenadas };
