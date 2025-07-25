import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  defaultPass: process.env.DEFAULTPASSWORD,
  bycript_salt_rounds: process.env.BYCRIPT_SALT_ROUNDS,
};
