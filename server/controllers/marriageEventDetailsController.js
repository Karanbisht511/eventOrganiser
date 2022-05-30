const marriageDetails = require("../models/marriageDetails");

const { ObjectId } = require("mongodb");

exports.updateMarriageDetails = (req, res) => {
  const userId = req.query.id;
  const updates = req.body;
  // console.log("userId:", userId);
  console.log(
    "InvitaionTemplate id and relatives details from frontend:",
    updates
  );

  marriageDetails
    .updateOne({ user_id: userId }, updates)
    .then((response) => {
      console.log("data updated:", response);
    })
    .catch((error) => {
      console.log("error", error);
    });

  res.send(`marriage details information updated:`);
};
