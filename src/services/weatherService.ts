import axios from 'axios';

const API_KEY = process.env.OPENWEATHER_API_KEY;

export const getWeather = async (destination: string): Promise<{ description: string; temperature: number }> => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${destination}&appid=${API_KEY}&units=metric`
    );

    // Extraer la descripción del clima y la temperatura
    const { weather, main } = response.data;
    const description = weather[0].description; // Descripción del clima (ej. "clear sky", "rain")
    const temperature = main.temp; // Temperatura en grados Celsius

    return {
      description,
      temperature,
    };
  } catch (error) {
    console.error('Error obteniendo el clima:', error);
    throw new Error('No se pudo obtener la información del clima.');
  }
};

