import express from "express";
import { CostController } from "./cost.controller";

const router = express.Router();

router.post("/create-cost", CostController.createCost);
router.get("/costs", CostController.getAllCost);
router.get("/cost/:id", CostController.getSingleCost);
router.get("/costs-by-type/:type", CostController.getCostsByType);

export const CostRoute = router;
