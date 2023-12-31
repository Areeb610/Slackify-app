import express from "express";
import {registercontroller, logincontroller} from "../controller/usercontroller.js";
import {
    create_workspace,
    delete_workspace,
    joined_workspace,
    my_created_workspace,
    people_in_workspace,
    remove_people
} from "../controller/workspace.js";
import {get_invite, invite_people, accept_invite} from "../controller/invite.js";

import {create_channel} from "../controller/channel.js"


const router = express.Router();

router.post("/register", registercontroller)

router.post("/login", logincontroller)

router.post("/create_workspace", create_workspace)

router.post("/invite_people", invite_people)

router.get("/get_invite", get_invite)

router.post("/accept_invite", accept_invite)

router.get("/get_people", people_in_workspace)

router.get("/my_created", my_created_workspace)

router.delete("/remove", remove_people)

router.get("/joined", joined_workspace)

router.delete("/delete_workspace", delete_workspace)

router.post("/create_channel", create_channel)

export default router;
