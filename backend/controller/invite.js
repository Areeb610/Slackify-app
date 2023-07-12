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
        const invite = await client.query(`SELECT person.name,workspace.workspace_name
        FROM invitation
        JOIN person ON invitation.sender_id = person.id
        JOIN workspace ON invitation.workspace_id = workspace.id
        WHERE invitation.receiver_id = ${user_id} `, (err, result) => {
            if (!err) {
                return res.status(201).send({success: true, data: result.rows})
            } else {
                return res.status(404).send({success: false, message: "Error", err});
            }
        })

    } catch (err) {
        return res.status(500).send({succes: false, message: "Error", err});
    }
}
