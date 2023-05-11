const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT || 8800;

const app = express();

const userRoutes = require("./routes/users");

// allow x-www-form-urlencoded body type in postman requests
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//parser
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://Sandeep:Sandeep@cluster0.bdwyq5q.mongodb.net/newDataBase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });

//for testing purpose
app.get("/", (req, res) => {
  res.send("Hello Proctor!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
