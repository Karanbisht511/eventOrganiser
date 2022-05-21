require("dotenv").config();

const express = require("express");
const indexRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
const db = require("./config");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// const url =
//   "mongodb+srv://karan:kgjxaAVKsH6HSBXf@cluster0.kw70c.mongodb.net/test";

// mongoose
//   .connect(url, { useUnifiedTopology: true })
//   .then(() => {
//     console.log("Database is connected");
//   })
//   .catch((error) => {
//     console.log("Error is occured", error);
//   });
// const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", indexRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
