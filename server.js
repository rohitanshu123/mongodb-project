require("dotenv").config();

const express = require("express");

const app = express();

const connectDatabase = require("./db/connect");

const start= async()=>

{
    try
    {
        console.log("connected 1");
        await connectDatabase(process.env.MONGODB_URL);
        console.log("connected 2");

    }
    catch(error)
    {
        console.log(error);

    }

}

start();