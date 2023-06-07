const express = require("express");

const {getUser, postUser, getHomePage} = require("../controllers/usercontroller");



const router = express.Router();

// create routes
router,route("/").get(getHomePage);
router.route("./displayUser").get(getUser);
router.route("./createUser").post(postUser);
 
module.exports = router

