import { Types } from "mongoose";

export type TUser = {
  name: string;
  password: string;
  role: "admin" | "user";
  isDeleted: boolean;
};
