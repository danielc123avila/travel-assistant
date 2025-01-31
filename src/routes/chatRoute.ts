import * as express from "express";
import { destinationAgent } from "../agents/destinationAgent";
import { packingAgent } from "../agents/packingAgent";
import { flightAgent } from "../agents/flightAgent";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message, context } = req.body;

  try {
    // Manejo de consultas sobre destinos
    if (message.toLowerCase().includes("destinos")) {
      const destinationResponse = await destinationAgent(message);
      res.json({ response: destinationResponse });
      return;
    }

    // Manejo de consultas sobre clima
    if (message.toLowerCase().includes("clima") && context?.destination) {
      const climateResponse = await packingAgent(
        context.destination,
        context.days || 1
      );
      res.json({ response: climateResponse });
      return;
    }

    if (
      message.toLowerCase().includes("vuelos") &&
      context?.origin &&
      context?.destination &&
      context?.date
    ) {
      const flightResponse = await flightAgent(
        context.origin,
        context.destination,
        context.date
      );
      res.json({ response: flightResponse });
      return;
    }

    res.json({ response: "Lo siento, no entendí tu solicitud." });
    return;
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    res.json({ response: "Hubo un error procesando tu solicitud." });
    return;
  }
});

export default router;
