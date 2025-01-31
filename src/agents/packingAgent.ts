import { getWeather } from '../services/weatherService';
import { getPackingSuggestions } from '../services/packingService';

export const packingAgent = async (destination: string, days: number) => {
  try {
    // Obtener el clima del destino
    const { description, temperature } = await getWeather(destination);

    // Generar sugerencias de equipaje basadas en el clima
    const packingList = getPackingSuggestions(description, days);

    // Formatear la respuesta
    return `El clima en ${destination} será ${description}, con una temperatura de ${temperature.toFixed(1)}°C. Aquí tienes una lista básica para empacar:\n- ${packingList.join('\n- ')}`;
  } catch (error) {
    return 'Hubo un problema al obtener el clima. Por favor, intenta nuevamente.';
  }
};
