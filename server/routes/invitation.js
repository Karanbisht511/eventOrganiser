const express = require("express");
const Router = express.Router();

const invitation = require("../controllers/invitationController");

Router.get("/", invitation.getAllInvitationTemplatesAndRelativesSaved);
//get all invitation templates present in database and relatives details if present in userInfo collection

Router.post(
  "/saveInvitationAndRelatives",
  // invitation.saveInvitationTemplateAndRelatives
  invitation.updateMarriageDetails
); //Save invitation template and relatives in UserInfo

// Router.post("/modifyInvitationTemplate", invitation.modifyInvitationTemplate);
// Router.post("/modifyRelativesDetails", invitation.modifyRelativesDetails);
// Router.post("/deleteRelative", invitation.deleteRelative);

module.exports = Router;
