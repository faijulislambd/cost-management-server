import { NextFunction, Request, Response } from "express";
import { costServices } from "./cost.service";

const getAllCost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await costServices.getAllCostFromDb();
    res.status(200).json({
      success: true,
      message: "All cost retrieved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { costId } = req.params;
    // Import ObjectId from mongodb at the top of the file if not already imported
    const { ObjectId } = require("mongodb");
    const result = await costServices.getCostByIdFromDb(new ObjectId(costId));
    res.status(200).json({
      success: true,
      message: "Cost retrieved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
