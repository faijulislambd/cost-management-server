import { Types } from "mongoose";
import { CostModel } from "../cost.model";
import { TCost } from "./cost.interface";
import { CostTypeModel } from "../type.model";

const createCostInDB = async (costData: TCost) => {
  const newCost = await CostModel.create(costData);
  return newCost;
};

const getAllCostFromDb = async () => {
  const result = await CostModel.find();
  return result;
};

const getCostByIdFromDb = async (_id: Types.ObjectId) => {
  const result = await CostModel.findById(_id);
  return result;
};

const getCostGroupedByType = async (costType: string) => {
  const result = await CostModel.aggregate([
    {
      $match: {
        type: new Types.ObjectId(costType),
      },
    },

    {
      $group: { _id: "$type", costs: { $push: "$$ROOT" } },
    },
  ]);

  return result;
};

const updateCostInDb = async (_id: Types.ObjectId, payload: Partial<TCost>) => {
  const result = await CostModel.findByIdAndUpdate(
    _id,
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

const deleteCostFromDb = async (_id: Types.ObjectId) => {
  const result = await CostModel.findByIdAndDelete(_id);
  return result;
};

export const costServices = {
  createCostInDB,
  getAllCostFromDb,
  getCostByIdFromDb,
  getCostGroupedByType,
  updateCostInDb,
  deleteCostFromDb,
};
