const express = require("express");
// creating instance of express
const app = express(); 
app.listen(5000,console.log("Server started at port 5000"));

app.get("/" , (req , res) => {
    res.send("API running");

});
