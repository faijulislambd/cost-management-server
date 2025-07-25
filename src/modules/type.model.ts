import { model, Schema } from "mongoose";
import { TCostType } from "./type/type.interface";

const costTypeSchema = new Schema<TCostType>({
  name: { type: String, required: true },
});

export const CostTypeModel = model<TCostType>("CostType", costTypeSchema);
