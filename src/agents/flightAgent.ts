import { searchFlights } from "../services/flightService";

export const flightAgent = async (
  origin: string,
  destination: string,
  date: string
) => {
  try {
    const flights = await searchFlights(origin, destination, date);

    if (flights.length === 0) {
      return "No se encontraron vuelos disponibles.";
    }

    return flights
      .map(
        (flight) =>
          `Vuelo desde ${flight.origin} a ${flight.target} por ${flight.price}`
      )
      .join("\n");
  } catch (error) {
    return "Hubo un problema al buscar vuelos.";
  }
};
