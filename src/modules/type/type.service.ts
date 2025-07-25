import { Types } from "mongoose";
import { CostModel } from "../cost.model";
import { TCostType } from "./type.interface";
import { CostTypeModel } from "../type.model";

const createCostTypeInDB = async (costTypeData: TCostType) => {
  const newCostType = await CostTypeModel.create(costTypeData);
  return newCostType;
};

const getAllCostTypeFromDb = async () => {
  const result = await CostTypeModel.find();
  return result;
};

const updateCostTypeInDb = async (
  _id: Types.ObjectId,
  payload: Partial<TCostType>
) => {
  const result = await CostTypeModel.findByIdAndUpdate(
    _id,
    { $set: payload },
    { new: true, runValidators: true }
  );
  return result;
};

const deleteCostTypeFromDb = async (_id: Types.ObjectId) => {
  const result = await CostTypeModel.findByIdAndDelete(_id);
  return result;
};

export const costServices = {
  createCostTypeInDB,
  getAllCostTypeFromDb,
  updateCostTypeInDb,
  deleteCostTypeFromDb,
};
