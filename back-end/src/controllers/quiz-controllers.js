import { QuizModel } from "../models/quiz-models.js";
import { CategoryModel } from "../models/category-model.js";

export const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const { category } = body;

    await CategoryModel.create({
      category: category,
    });
    res.status(200).json({ message: "cat success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "cat error" });
  }
};
export const getAllCategory = async (req, res) => {
  const result = await CategoryModel.find();
  res.status(200).json({ data: result });
};

export const createQuiz = async (req, res) => {
  try {
    const body = req.body;
    console.log("body", body);
    const { question, answers, image, category } = body;

    await QuizModel.create({
      category: category,
      question: question,
      answers: answers,
      image: image,
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "error" });
  }
};

export const getQuizzesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const quizzes = await QuizModel.find({ category: category });

    res.status(200).json({ quizzes });
  } catch (err) {
    res.status(401).json({ message: "error" });
  }
};

export const getFilteredQuiz = async (req, res) => {
  try {
    const {id} = req.params;
    const quizzes = await QuizModel.find({category : id})
    res.status(200).json({quizzes});
  } catch (err) {
    res.status(401).json({ message: "error" });
  }
};
