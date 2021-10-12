/*
const User = require('../models/User');
const { response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
 
     try {
       
         // create el nuevo usuario
         user = new User(req.body);
 
         //password hash
 
         // save user
         await user.save();
 
 
     }catch(error) {
         console.log(error);
         res.status(400).send('Hubo un error');
     }
 }
 
 exports.getUserInfo = async (req, res=response) => {
 
    
 
     try {
         const user = await User.find({});
         res.json({ user });
     } catch (error) {
         console.log(error);
         res.status(500).send('Hubo un error');
     }  
 }

*/