import {hashPassword, comparePassword} from "../helper/helper.js"
import userModel from "../models/user.js"

export const registercontroller = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if (!name) {
            return res.send({error: "Name is Required"})
        }
        if (!email) {
            return res.send({error: "Email is Required"})
        }
        if (!password) {
            return res.send({error: "Password is Required"})
        }
        const existuser = await userModel.findOne({email})
        if (existuser) {
            return res.status(200).send({success: false, message: "Email Already exists"})
        }
        const encryptpassword = await hashPassword(password);
        const user = await new userModel({name, email, password: encryptpassword}).save();
        res.status(201).send({success: true, message: "User Register Successfully"})
    } catch (err) {
        console.log(err);
        res.status(500).send({success: false, message: "Error in Registration", err});
    }
}

export const logincontroller = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            res.status(404).send({success: false, message: "Invalid email or password"});
        }
        const user = await userModel.findOne({email})
        if (! user) {
            res.status(404).send({success: false, message: "Email Not Exists"});
        }
        const matchpassword = await comparePassword(password, user.password);
        if (! matchpassword) {
            res.status(200).send({success: false, message: "Wrong Password"});
        }

        res.status(200).send({
            success: false,
            message: "Login Succesfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }

        });

    } catch (err) {
        console.log(err)
        res.status()
    }
}
