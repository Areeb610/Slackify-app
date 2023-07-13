import client from "../database/postgresql.js"


export const invite_people = async (req, res) => {
    try {
        const {workspace_id, sender_id, email, status} = req.body;
        if (!email || !workspace_id || !sender_id) {
            return res.send({error: "Workspace or Email is Required"})
        }

        let user = await client.query(`Select id from person where email = '${email}'`)

        const receiver_id = user.rows[0].id;
        if (user.rowCount > 0) {
            const invitation = await client.query(`SELECT * From invitation where receiver_id = ${receiver_id} and workspace_id = ${workspace_id}`)
            if (invitation.rowCount > 0) {
                return res.status(200).send({success: true, message: "Invitation Already Sent"})
            } else {
                const invite = await client.query(`INSERT INTO invitation (workspace_id,sender_id,receiver_id,status) 
       SELECT ${workspace_id}, ${sender_id},${receiver_id},false 
       WHERE ${receiver_id}
       NOT IN (
            SELECT added_people from people_in_workspace where workspace_id = ${workspace_id})`, (err, result) => {
                    if (!err) {
                        if (result.rowCount > 0) {
                            return res.status(201).send({success: true, message: "Sent Invitation successfully"})
                        }
                        if (result.rowCount == 0) {
                            return res.status(200).send({success: true, message: "Already In Workspace"})
                        }
                    } else {
                        return res.status(200).send({success: false, err});
                    }
                })
            }
        } else {
            return res.status(404).send({succes: false, message: "No User Found"});
        }

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error 500", err});
    }
}
export const get_invite = async (req, res) => {
    try {
        const {user_id} = req.body;

        if (!user_id) {
            return res.send({error: "User Required"})
        }
        const invite = await client.query(`SELECT person.name,workspace.workspace_name,workspace.id
        FROM invitation
        JOIN person ON invitation.sender_id = person.id
        JOIN workspace ON invitation.workspace_id = workspace.id
        WHERE invitation.receiver_id = ${user_id} `, (err, result) => {
            if (!err) {
                return res.status(201).send({success: true, data: result.rows})
            } else {
                return res.status(404).send({success: false, message: "Error in getting invite", err});
            }
        })

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error", err});
    }
}
export const accept_invite = async (req, res) => {
    try {

        const {user_id, workspace_id} = req.body;

        if (!user_id || !workspace_id) {
            return res.status(400).send({succes: false, message: "Error", err});
        }

        const status = await client.query(`Select * from invitation WHERE receiver_id = ${user_id} and workspace_id = ${workspace_id} 
        and status = false`)

        // console.log(status.rowCount)
        if (status.rowCount == 1) {
            const invit = await client.query(`DELETE FROM invitation  
            WHERE receiver_id = ${user_id} and workspace_id = ${workspace_id}`, (err, result) => {
                if (!err) {
                    client.query(`INSERT INTO people_in_workspace (workspace_id,added_people) VALUES ('${workspace_id}','${user_id}') `)

                    return res.status(201).send({succes: true, message: "Accepted Invite Successfully "})

                } else {
                    return res.status(404).send({succes: false, message: "Error In Accepting Invite"})
                }
            })
        } else {
            return res.status(404).send({succes: false, message: "No Invitation Found"})
        }

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error", err});
    }
}
