import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answers: [
    { answer: String, isCorrect: Boolean  },
    // { answer2: String },
    // { answer3: String },
    // { answer4: String },
  ],
  image: String,
  category: String,
});

export const QuizModel = mongoose.model("quiz", quizSchema);
