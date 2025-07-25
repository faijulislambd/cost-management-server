import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const costsRouter = express.Router();
const costTypeRouter = express.Router();

app.use("/api/v1/costs", costsRouter);
app.use("/api/v1/types", costTypeRouter);

app.post("/", (req: Request, res: Response) => {});

export default app;
