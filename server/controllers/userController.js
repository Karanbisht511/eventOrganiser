require("dotenv").config();
const bcrypt = require("bcrypt");

const User = require("../models/user");
const { ObjectId } = require("mongodb");

const saltRounds = parseInt(process.env.SALTROUNDS);

exports.Login = async (req, res) => {
  console.log(req.query);
  const data = req.query;
  console.log(data);
  const userId = await User.findOne({ email: data.email })
    .then(async (userInfo) => {
      console.log("userInfo:", userInfo);

      const match = await bcrypt.compare(data.password, userInfo.password);
      console.log(match);
      if (match) {
        console.log("login successfully");
        return userInfo;
      }
    })
    .catch((error) => {
      console.log("error:", error);
    });

  if (userId) {
    res.send(userId._id);
  } else {
    res.send("login failed");
  }
};

exports.getUserInfo = async (req, res) => {
  const data = req.query;
  console.log("id received:", data.userId);
  const id = data.userId;
  const o_id = new ObjectId(id);
  const info = await User.findOne({ _id: o_id })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log("error:", error);
    });
  res.send(info);
};

exports.signup = async (req, res) => {
  console.log(req.body);
  const data = req.body;

  const hashedPassword = await bcrypt
    .hash(data.password, saltRounds)
    .then((response) => {
      console.log(response);
      return response;
    });

  const newUser = new User({
    first_name: data.firstName,
    last_name: data.lastName,
    mobile: data.mobile,
    pincode: data.pincode,
    email: data.email,
    password: hashedPassword,
  });

  console.log(newUser);

  const responseFromDb = await newUser
    .save()
    .then((response) => {
      console.log("data inserted:", response);
      console.log("data inserted:Signup successfully");
      return "data inserted:Signup successfully";
    })
    .catch((error) => {
      console.log("error:", error);
      return "unexpected error!\n Please check backend console.";
    });

  res.send(responseFromDb);
};
