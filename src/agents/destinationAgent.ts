import { getDestinationDetails } from '../services/destinationService';

export const destinationAgent = async (input: string) => {
  if (input.toLowerCase().includes('destinos')) {
    const destinations = await getDestinationDetails();
    return `Aquí tienes algunos destinos populares:${destinations}`;
  }
  return null;
};
