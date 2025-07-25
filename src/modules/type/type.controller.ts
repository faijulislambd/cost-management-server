import { NextFunction, Request, Response } from "express";
import { costTypeServices } from "./type.service";

const createCostType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { costType: costTypeData } = req.body;
    const result = await costTypeServices.createCostTypeInDB(costTypeData);
    res.status(200).json({
      success: true,
      message: "Cost Type created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllCostType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await costTypeServices.getAllCostTypeFromDb();
    res.status(200).json({
      success: true,
      message: "All cost types retrieved",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CostTypeController = {
  createCostType,
  getAllCostType,
};
