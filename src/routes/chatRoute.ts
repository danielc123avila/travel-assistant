import { RETURN } from "@langchain/langgraph/dist/constants";
import { Router, Request, Response } from "express";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: "Message is required" });
  }

  const response = { reply: "recibi tu mensaje", message };

  res.json(response);
});

export default router;
