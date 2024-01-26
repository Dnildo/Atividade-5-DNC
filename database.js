import {require} from './node_modules'
import module from 'module' 
const express = require('express')

const cookieParser = require('cors')
const path = require('path');
const mongoose = require("mongoose");
const routes = require('./src/routes')

const app = express()
const port = process.EXEMPLO.env.DATABASE_URL || 27017
function connectTodatabase(){
    
mongoose.connect('mongodb://localhost:27017//vite-project', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    nodeIntegration: true,
    contextIsolation: false
})


const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("conectado ao banco de dados!"));
db.getCollection()
}
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes)

app.listen(port,function(){
    console.log(`Server runing on port ${port}`)
})
module.exports = connectTodatabase