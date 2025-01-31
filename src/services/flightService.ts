import { ApifyClient } from "apify-client";

const client = new ApifyClient({
  token: "<YOUR_API_TOKEN>",
});

export const searchFlights = async (
  origin: string,
  destination: string,
  date: string
) => {
  try {
    const input = {
      "origin.0": origin,
      "target.0": destination,
      date: date,
    };

    const run = await client.actor("jupri/skyscanner-flight").call(input);

    const { items } = await client.dataset(run.defaultDatasetId).listItems();

    return items;
  } catch (error) {
    console.error("Error buscando vuelos:", error);
    throw new Error("No se pudo obtener información sobre vuelos.");
  }
};
