import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    age: Number,
    createdOn: Date,
});

export const UserModel = mongoose.model("user", userSchema);