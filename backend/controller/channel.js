import client from "../database/postgresql.js";

export const create_channel = async (req, res) => {
    try {
        const {channel_name, workspace_id, owner_id} = req.body;
        const channel = await client.query(`INSERT INTO channel (channel_name,workspace_id,owner_id) VALUES( '${channel_name}',${workspace_id},${owner_id})`, (error, result) => {
            if (!error) {
                return res.status(201).send({success: true, message: "Channel Created Successfully"})
            } else {
                return res.status(404).send({success: false, err: error.detail})
            }
        })
    } catch (err) {
        return res.status(500).send({success: true, erro: err})
    }
}

export const invite_in_channel = async (req, res) => {
    try {
        const {owner_id, email, channel_id} = req.body;
        if (!owner_id || !email || !channel_id) {
            return res.send({message: "Required"})
        }
        const person = await client.query(`SELECT * From person where email = ${email} `)
        const user_id = person.rows[0].id
        if (person.rowCount > 0) {
            const invite = await client.query(`SELECT * From channel_invitation where user_id = ${user_id} and channel_id = ${channel_id}`)
            if (invite.rowCount > 0) {
                res.status(200).send({success: false, message: "Inviatation Already Sent"})
            } else {
                const invite = await client.query(`INSERT INTO channel_invitation (channel_id,user_id)
                SELECT ${channel_id}, ${user_id} WHERE ${user_id} NOT IN  
                (SELECT user_id from people_in_channel where channel_id = ${channel_id} and user_id = ${user_id})`, (err, result) => {
                    if (!err) {
                        if (result.rowCount > 0) {
                            return res.status(201).send({success: true, message: "Invitation Sent Successfully"})
                        }
                        if (result.rowCount == 0) {
                            return res.status(200).send({success: false, message: "Already in Channel"})
                        }
                    } else {
                        return res.status(500).send({success: false, err})
                    }
                })

            }

        } else {
            return res.status(404).send({success: true, message: "User Not Found"})
        }

    } catch (err) {
        return res.status(500).send({success: false, err})
    }
}
