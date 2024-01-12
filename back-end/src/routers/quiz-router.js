import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createQuiz, getAllCategory, getFilteredQuiz } from "../controllers/quiz-controllers.js";
import { createCategory } from "../controllers/quiz-controllers.js";

export const quizRouter = express.Router();

quizRouter.post("/quiz", verifyToken, createQuiz);
quizRouter.post("/category", verifyToken, createCategory);
quizRouter.get("/categories", getAllCategory);
quizRouter.get("/quiz/:id", getFilteredQuiz);
// userRouter.put
// userRouter.delete
// CRUD - Create , Read , Update , Delete
