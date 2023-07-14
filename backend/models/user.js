import mongoose from "mongoose";
const userSchemea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("users", userSchemea)
