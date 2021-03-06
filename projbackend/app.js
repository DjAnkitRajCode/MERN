require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My Routes
const authRoutes    = require("./routes/auth");
const userRoutes    = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
});

//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/",(req,res)=>{
    return res.send("welcome");
});

//using Routes
app.use("/api",authRoutes);
app.use("/api",userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

//PORT
const port = process.env.PORT || 3000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});
