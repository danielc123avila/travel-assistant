import * as express from 'express';
import { destinationAgent } from '../agents/destinationAgent';
import { packingAgent } from '../agents/packingAgent';

const router = express.Router();

router.post('/', async (req, res) => {
  const { message, context } = req.body;

  let response;

  try {
    if (message.toLowerCase().includes('destinos')) {
      response = await destinationAgent(message);
    } else if (message.toLowerCase().includes('clima') && context?.destination) {
      response = await packingAgent(context.destination, context.days || 1); // Días predeterminados si no se proporcionan
    } else {
      response = 'Lo siento, no entendí tu solicitud.';
    }
  } catch (error) {
    console.error('Error procesando la solicitud:', error);
    response = 'Hubo un error procesando tu solicitud.';
  }

  res.json({ response });
});

export default router;
