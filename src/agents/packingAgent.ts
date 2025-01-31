import { getWeather } from '../services/weatherService';
import { getPackingSuggestions } from '../services/packingService';

export const packingAgent = async (destination: string, days: number) => {
  try {
    
    const { description, temperature } = await getWeather(destination);


    const packingList = getPackingSuggestions(description, days);


    return `El clima en ${destination} será ${description}, con una temperatura de ${temperature.toFixed(1)}°C. Aquí tienes una lista básica para empacar:\n- ${packingList.join('\n- ')}`;
  } catch (error) {
    return 'Hubo un problema al obtener el clima. Por favor, intenta nuevamente.';
  }
};
