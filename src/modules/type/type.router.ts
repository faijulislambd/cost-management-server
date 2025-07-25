import express from "express";
import { CostTypeController } from "./type.controller";

const router = express.Router();

router.post("/create-cost-type", CostTypeController.createCostType);
router.get("/cost-types", CostTypeController.getAllCostType);

export const CostTypeRoute = router;
