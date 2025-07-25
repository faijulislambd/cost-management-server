import express, { Request, Response } from "express";
import cors from "cors";
import { CostTypeRoute } from "./modules/type/type.router";
import { CostRoute } from "./modules/cost/cost.router";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api/v1/costs", CostRoute);
app.use("/api/v1/types", CostTypeRoute);

app.post("/", (req: Request, res: Response) => {});

export default app;
