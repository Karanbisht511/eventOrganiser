const express = require("express");
const indexRouter = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
const url =
  "mongodb+srv://karan:kgjxaAVKsH6HSBXf@cluster0.kw70c.mongodb.net/test";

mongoose
  .connect(url, { useUnifiedTopology: true })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log("Error is occured", error);
  });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", indexRouter);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

// app.get("/login", (req, res) => {
//   console.log(req.query);
//   const data = req.query;
//   res.send(data);
// });

// app.post("/signup", (req, res) => {
//   console.log(req.body);
//   const data = req.body;
//   res.send(data);
// });

const port = 4000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
