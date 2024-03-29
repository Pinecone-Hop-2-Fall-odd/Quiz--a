import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routers/user-router.js";
import { quizRouter } from "./routers/quiz-router.js";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(userRouter);
app.use(quizRouter);

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://Amaraa:Amarbileg0627@cluster0.k5hrur0.mongodb.net/"
  );
  console.log("database connected");
};

connectDb();

app.listen(8008);
