const User = require("../models/user");
const { ObjectId } = require("mongodb");

exports.Login = async (req, res) => {
  console.log(req.query);
  const data = req.query;
  console.log(data);
  const userId = await User.findOne({ email: data.email })
    .then((userInfo) => {
      console.log("userInfo:", userInfo);
      if (userInfo.password === data.password) {
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
  } // res.send(data);
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

exports.signup = (req, res) => {
  console.log(req.body);
  const data = req.body;
  const newUser = new User({
    first_name: data.firstName,
    last_name: data.lastName,
    mobile: data.mobile,
    pincode: data.pincode,
    email: data.email,
    password: data.password,
  });
  newUser
    .save()
    .then(() => {
      console.log("data inserted:Signup successfully");
    })
    .catch((error) => {
      console.log("error:", error);
    });

  res.send(data);
};
