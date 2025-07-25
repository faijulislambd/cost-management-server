import { model, Schema } from "mongoose";
import { TCost } from "./cost/cost.interface";

const costSchema = new Schema<TCost>(
  {
    name: { type: String, required: true },
    type: {
      type: Schema.Types.ObjectId,
      ref: "CostType",
      required: [true, "Cost Type Reference Required"],
    },
    amount: {
      type: Number,
      required: true,
    },
    dateOfPayment: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const CostModel = model<TCost>("Cost", costSchema);
