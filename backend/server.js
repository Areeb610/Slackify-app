require('dotenv').config();
// importing dummy data module
const {chats} = require("./data/dummyData");
const express = require("express");
// creating instance of express
const app = express(); 
// creating port from env
const port = process.env.PORT || 5003;
app.listen( port , console.log(`Server started at port locallhost:${port}`) );

//testing api
app.get("/" , (req , res) => {
    res.send("API running");
});

// testing data list
app.get("/api/chats" , (req , res) => {
    res.send(chats);
});

//testing api end point with params :id
app.get("/api/chats/:id" , (req , res) => {
    // extracting single chat data from object
    const singleChat = chats.find( (f) =>  f._id === req.params.id );
    res.send(singleChat);
});
