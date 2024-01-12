import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  category: { type: String, required: true },
});

export const CategoryModel = mongoose.model("category", categorySchema);
