import express from "express";
import {registercontroller, logincontroller} from "../controller/usercontroller.js";

const router = express.Router();

router.post("/register", registercontroller)

router.post("/login", logincontroller)


export default router;
