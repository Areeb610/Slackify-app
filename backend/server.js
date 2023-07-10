import express from "express";
import dotenv from "dotenv";
import connectDb from './database/mongo.js'
import userroutes from "./routes/uroutes.js"


const app = express();


dotenv.config()

connectDb();

app.use(express.json());

app.use("/api/user", userroutes);

app.listen(5000, () => {
    console.log("Server is Running");
})
