import express from "express";
import {registercontroller, logincontroller} from "../controller/usercontroller.js";
import {create_workspace} from "../controller/workspace.js";
const router = express.Router();

router.post("/register", registercontroller)

router.post("/login", logincontroller)

router.post("/create_workspace", create_workspace)

export default router;
