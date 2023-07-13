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

export const people_in_workspace = async (req, res) => {
    try {
        const {workspace_id} = req.body;
        if (!workspace_id) {
            return res.status(404).send({success: false, message: "No Workspace Found"});
        } else {
            const workspace = await client.query(`Select person.id, person.name from people_in_workspace join person on people_in_workspace.added_people = person.id
              where people_in_workspace.workspace_id = ${workspace_id}`, (error, result) => {
                if (!error && result.rowCount > 0) {
                    return res.status(200).send({success: true, data: result.rows});
                } else if (!error && result.rowCount == 0) {
                    return res.status(200).send({success: false, message: "No Workspace or People Found"});
                } else {
                    return res.status(404).send({success: false, message: "Error in Getting Workspace Friends", error});
                }
            })
        }

    } catch (err) {
        return res.status(500).send({success: false, message: "Error in Getting Workspace Friends", err});
    }

}

export const my_created_workspace = async (req, res) => {
    try {
        const {user_id} = req.body
        if (!user_id) {
            return res.status(404).send({success: false, message: "No User Found"})
        } else {
            const user = await client.query(`Select * from person where id = ${user_id}`)

            if (user.rowCount == 0) {
                return res.status(404).send({success: false, message: "No User Found"})
            }
            if (user.rowCount > 0) {
                const workspae = await client.query(`Select id,workspace_name from workspace where owner_id = ${user_id}`, (error, result) => {
                    if (!error) {
                        return res.status(200).send({success: true, data: result.rows})
                    } else {
                        return res.status(500).send({success: false, message: "Error in Query"})
                    }
                })
            }
        }
    } catch (err) {
        res.status(500).send({success: false, err})
    }
}

export const remove_people = async (req, res) => {
    try {
        const {owner_id, user_id, workspace_id} = req.body
        // console.log(owner_id, user_id, workspace_id)
        if (!owner_id || !user_id || !workspace_id) {
            return res.status(404).send({success: false, message: "user or workspace not found", error})
        } else {
            const remove = await client.query(`DELETE FROM people_in_workspace where added_people = ${user_id}
             AND workspace_id IN ( Select id from workspace where id = ${workspace_id} and owner_id = ${owner_id}
             )`, (err, result) => {
                if (!err) {
                    res.status(200).send({success: true, message: "Removed Successfully"});
                } else {
                    res.status(500).send({success: false, message: "Error", err});
                }
            })
        }

    } catch (error) {
        return res.status(500).send({success: false, message: "Error 500", error})
    }
}
