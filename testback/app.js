const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('Hello World!');
});
const admin = (req,res)=>{
    res.send("welcome as admin");
};
const isloggedIn = (req, res, next)=>{
    console.log("welcome admin");
    next();
};
app.get("/admin",isloggedIn,admin);

//PORT
const port = 3000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});
