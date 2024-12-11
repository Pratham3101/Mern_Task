import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants/constants";

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODB_URL;
    if (!mongoURL) {
      throw new Error("MONGODB_URL is not defined in .env");
    }

    if (!DB_NAME) {
      throw new Error("DB_NAME is not defined in constants");
    }

    const connectionString = `${mongoURL}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(connectionString);

    console.log(`\n MongoDB connected! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("\n MONGODB connection Failed: ", error);
    process.exit(1);
  }
};

export default connectDB;
