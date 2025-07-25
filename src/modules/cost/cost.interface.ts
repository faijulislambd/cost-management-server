import { Types } from "mongoose";

export type TCost = {
  name: string;
  type: Types.ObjectId[];
  amount: number;
  dateOfPayment: Date;
};
