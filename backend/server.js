import express from "express";
import dotenv from "dotenv";
import connectDb from './database/mongo.js'
import userroutes from "./routes/uroutes.js"
import client from "./database/postgresql.js"
import redisclient from "./redis/redis.js";
import cors from "cors"

const app = express();


dotenv.config()

// connectDb();
app.use(cors())

await client.connect((err) => {
    if (err) {
        console.log('Failed to connect to PostgreSQL server:', err);
        return;
    }
    console.log("PostgreSql is connected");
});

// const user = await client.query('CREATE TABLE channel_invitation (channel_id INT REFERENCES channel(id) ON DELETE CASCADE, workspace_id INT REFERENCES workspace(id) ON DELETE CASCADE , user_id INT, FOREIGN KEY (user_id, workspace_id) REFERENCES people_in_workspace(added_people, workspace_id) ON DELETE CASCADE ) ', (err, result) => {
//     if (!err) {
//         console.log(result);
//     } else {
//         console.log(err)
//     }
// });

// const user = await client.query('CREATE TABLE people_in_channel (channel_id INT REFERENCES channel(id) ON DELETE CASCADE,workspace_id INT REFERENCES workspace(id),added_people INT, FOREIGN KEY (added_people, workspace_id) REFERENCES people_in_workspace(added_people, workspace_id) ON DELETE CASCADE ) ', (err, result) => {
//     if (!err) {
//         console.log(result);
//     } else {
//         console.log(err)
//     }
// });


// const user = await client.query('CREATE TABLE CHANNEL (id SERIAL PRIMARY KEY, channel_name VARCHAR(255), workspace_id INT REFERENCES workspace(id) ON DELETE CASCADE , owner_id INT, FOREIGN KEY (owner_id, workspace_id) REFERENCES people_in_workspace(added_people, workspace_id) ON DELETE CASCADE) ', (err, result) => {
//     if (!err) {
//         console.log(result);
//     } else {
//         console.log(err)
//     }
// });


// redisclient.on('error', err => console.log('Redis Client Error', err));
// await redisclient.connect();


// client.end;
app.use(express.json());

app.use("/api/user", userroutes);

app.listen(5000, () => {
    console.log("Server is Running");
})
