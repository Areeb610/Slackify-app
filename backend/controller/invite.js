import client from "../database/postgresql.js"


export const invite_people = async (req, res) => {
    try {
        const {workspace_id, sender_id, receiver_id, status} = req.body;
        if (!receiver_id || !workspace_id || !sender_id) {
            return res.send({error: "Error"})
        }
        const invite = await client.query(`INSERT INTO invitation (workspace_id,sender_id,receiver_id,status) VALUES
      ('${workspace_id}', '${sender_id}','${receiver_id}',false) `, (err, result) => {
            if (!err) {
                return res.status(201).send({success: true, message: "Sent Invitation successfully"})
            } else {
                return res.status(404).send({success: false, message: "Error", err});
            }
        })

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error", err});
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
            const invit = await client.query(`UPDATE invitation SET status = true
         WHERE receiver_id = ${user_id} and workspace_id = ${workspace_id}`, (err, result) => {
                if (!err) {
                    client.query(`INSERT INTO people_in_workspace (workspace_id,added_people) VALUES ('${workspace_id}','${user_id}') `)
                    return res.status(201).send({succes: true, message: "Accepted Invite Successfully"})

                } else {
                    return res.status(404).send({succes: false, message: "Error In Accepting Invite"})
                }
            })
        } else {
            return res.status(404).send({succes: false, message: "Invitation Accepted Already"})
        }

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error", err});
    }
}
