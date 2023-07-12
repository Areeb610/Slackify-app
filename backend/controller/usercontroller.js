import {hashPassword, comparePassword} from "../helper/helper.js"
import userModel from "../models/user.js"
import client from "../database/postgresql.js"
import redisclient from "../redis/redis.js"

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
        const existuser = await client.query(`Select * from person WHERE email = '${email}'`)

        if (existuser.rowCount > 0) {
            return res.status(200).send({success: false, message: "Email Already exists"})
        }

        const encryptpassword = await hashPassword(password);
        // const user = await new userModel({name, email, password: encryptpassword}).save();
        const user = await client.query(`INSERT INTO person (Name,Email, Password,created_on)
        VALUES ('${name}','${email}','${encryptpassword}',current_timestamp)`, (err, result) => {
            if (!err) { // console.log(result)
            } else {

                return res.status(500).send({success: false, message: "Error in Registration", err});
            }
        });
        return res.status(201).send({success: true, message: "User Registered Successfully"})

    } catch (err) {
        console.log(err);
        return res.status(500).send({success: false, message: "Error in Registration", err});
    }
}

export const logincontroller = async (req, res) => {
    try {
        const {email, password} = req.body
        if (!email || !password) {
            return res.status(404).send({success: false, message: "Invalid email or password"});
        }
        // const user = await userModel.findOne({email})

        const user = await client.query(`Select * from person WHERE email = '${email}'`)
        let upass = ""
        if (user.rowCount > 0) { // console.log(user.rows[0])
            upass = user.rows[0].password
        }
        if (user.rowCount == 0) {
            return res.status(404).send({success: false, message: "Email Not Exists"});
        }

        const matchpassword = await comparePassword(password, upass);
        if (! matchpassword) {
            return res.status(200).send({success: false, message: "Wrong Password"});
        }

        const ruser = {
            id: user.rows[0].id,
            name: user.rows[0].name,
            email: user.rows[0].email
        };

        const temp = JSON.stringify(ruser)

        // await redisclient.set("User", temp, (error, result) => {
        //     if (error) {
        //         console.error("Error storing user in Redis:", error);
        //     } else {
        //         console.log("User stored in Redis:", result);
        //     }
        // });
        const uid = (user.rows[0].id).toString();
        await redisclient.set(uid, temp, (error, result) => {
            if (error) {
                console.error("Error storing user in Redis:", error);
            } else {
                console.log("User stored in Redis:", result);
            }
        });

        // const temp_redis_data = await redisclient.get(uid, (error, result) => {
        //     if (error) {
        //         console.error("Error storing user in Redis:", error);
        //     } else {
        //         console.log("User stored in Redis:", result);
        //     }
        // });
        // const redis_data = JSON.parse(temp_redis_data)
        // console.log(redis_data)

        return res.status(200).send({
            success: true,
            message: "Login Succesfully",

            user: {
                id: user.rows[0].id,
                name: user.rows[0].name,
                email: user.rows[0].email
            }

        });

    } catch (err) {
        console.log(err)
        return res.status(500).send({success: false, message: "Error in Login", err});
    }
}
