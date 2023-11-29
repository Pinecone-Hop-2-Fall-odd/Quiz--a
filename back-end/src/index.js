import express from "express";
import cors from "cors";
import { userRouter } from "./routers/user-router";

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(3000);
