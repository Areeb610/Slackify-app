// importing dummy data module
const {chats} = require("./data/dummyData");
const express = require("express");
// creating instance of express
const app = express(); 
app.listen(5000,console.log("Server started at port 5000"));

//testing api
app.get("/" , (req , res) => {
    res.send("API running");
});

//testing api end point with params :id
app.get("/api/chats/:id" , (req , res) => {
    // extracting single chat data from object
    const singleChat = chats.find( (f) =>  f._id === req.params.id );
    res.send(singleChat);
});
