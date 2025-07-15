import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./src/routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.DB_URL;

app.use(cors());
app.use(express.json());

await mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/api/msg", Routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});