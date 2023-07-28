const express = require('express')
const app = express()
const port = 3000
const sendMail=require('./routes/SendMail')
const mongoose = require("mongoose");
// set the port
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(cookieParser());

// connect to database
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listener for successful connection
mongoose.connection.on("connected", () => {
  console.log("Database connection successful"); // Display notification
});



app.get('/', (req, res) => res.send('Hello World!'))



app.use(require("./routes/login_routes")); // login page
app.use(require("./routes/logout_routes")); // logout page
app.use(require("./routes/signup_routes")); // signup page
app.use(require("./routes/TeamRoutes")); // Team Members
app.use(require("./routes/NewsLetter")); // newspaper letter subscriber 
app.use(require("./routes/Faqs")); // Faqs letter subscriber 
// app.use(require("./routes/admin_routes")); // admin page




app.listen(port, () => console.log(`Example app listening on port ${port}!`))