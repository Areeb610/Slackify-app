import client from "../database/postgresql.js"
import redisclient from "../redis/redis.js"

export const create_workspace = async (req, res) => {
    try {
        const {workspace_name, owner_id} = req.body;
        if (!workspace_name) {
            return res.send({error: "Workspace Name is Required"})
        }
        if (!owner_id) {
            return res.send({error: "Please Login "})
        }

        const data = await client.query(`INSERT INTO workspace (workspace_name,owner_id) VALUES ('${workspace_name}','${owner_id}')`, (err, result) => {
            if (!err) {
                return res.status(201).send({success: true, message: "Workspace created Successfully"})
            } else {
                return res.status(404).send({success: false, message: "Error in Creation", err});
            }
        });


    } catch (err) {
        return res.status(500).send({success: false, message: "Error in Creation", err});
    }

}
