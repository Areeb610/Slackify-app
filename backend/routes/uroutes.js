import express from "express";
import {registercontroller, logincontroller} from "../controller/usercontroller.js";
import {create_workspace} from "../controller/workspace.js";
import {get_invite, invite_people, accept_invite} from "../controller/invite.js";


const router = express.Router();

router.post("/register", registercontroller)

router.post("/login", logincontroller)

router.post("/create_workspace", create_workspace)

router.post("/invite_people", invite_people)

router.get("/get_invite", get_invite)

router.put("/accept_invite", accept_invite)


export default router;
