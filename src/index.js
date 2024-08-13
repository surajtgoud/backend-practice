// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./env",
});

connectDB();

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     console.log("DB Connected");
//   } catch (error) {
//     console.log("Error", error);
//   }
// })();
