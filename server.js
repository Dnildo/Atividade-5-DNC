import {require} from './node_modules'

require("dotenv").config();
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")
app.use(express.json());
const mongodb = require('mongodb')
const routes = require("./src/routes") 
const url = "mongodb+srv://Denildo1:123456@cluster0.zrcquc2.mongodb.net/";
connectTodatabase()
const connectTodatabase = require('./database')

mongoose.connect("mongodb+srv://Denildo1:123456@cluster0.zrcquc2.mongodb.net/",{
    useNewUrlParser: true,
    useUnifiedToplogy: true,
})

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("conectado ao banco de dados!"));
app.get('/', function(req, res){
    res.json({message:'projeto 5 DNC'})
});
const app = express();
const port = 5173;

app.use({routes});

app.listen(port,() =>{
console.log(`Backend starded at  httm://localhost:${port}`);
});