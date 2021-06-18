const User = require('../models/User');
const { response } = require('express');
const bcrypt = require('bcrypt')



exports.createUser = async (req, res) => {

   /*  bcrypt
        .hash(req.body.password,10)
        .then((hashedPassword)=>{
            let user={
                firstName:req.body.firstName,
                password:req.body.password,
                email:req.body.email,
            }
        })
 */

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

