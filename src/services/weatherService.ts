import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const getWeather = async (
  destination: string
): Promise<{ description: string; temperature: number }> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${API_KEY}&units=metric`
    );

    const { weather, main } = response.data;
    const description = weather[0].description;
    const temperature = main.temp;

    return {
      description,
      temperature,
    };
  } catch (error) {
    console.error("Error obteniendo el clima:", error);
    throw new Error("No se pudo obtener la información del clima.");
  }
};
