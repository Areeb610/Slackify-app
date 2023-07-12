import express from "express";
import dotenv from "dotenv";
import connectDb from './database/mongo.js'
import userroutes from "./routes/uroutes.js"
import client from "./database/postgresql.js"
import redisclient from "./redis/redis.js";
const app = express();


dotenv.config()

// connectDb();


client.connect((err) => {
    if (err) {
        console.log('Failed to connect to PostgreSQL server:', err);
        return;
    }
    console.log("PostgreSql is connected");
});

// const user = await client.query('CREATE TABLE invitation (workspace_id INT REFERENCES workspace(id) NOT NULL , sender_id INT REFERENCES person (id) NOT NULL , receiver_id INT REFERENCES person (id) NOT NULL , status BOOLEAN NOT NULL , PRIMARY KEY (workspace_id, receiver_id) )', (err, result) => {
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
