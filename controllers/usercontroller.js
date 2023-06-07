const UserModel = require("../models/userschema");



const getUser = async(req, res)=> {

    const myData = await UserModel.find();


    res.json({myData});

}

const postUser = async(req, res)=> {


}

const getHomePage = async(req, res)=> {
    console.log("welcome to home Page");

}

modules.exports = {getUser, postUser, getHomePage};