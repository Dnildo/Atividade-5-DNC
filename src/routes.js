import {require} from './node_modules'
import module from 'module'
const express = require('express')
const routes = express.Router();


routes.get('/', function(req, res){
    res.json({message:'projeto 5 DNC'})
});

module.exports = routes;