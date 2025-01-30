import "dotenv/config";
import * as express from "express";
import chatroute from "./routes/chatRoute";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/chat", chatroute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
