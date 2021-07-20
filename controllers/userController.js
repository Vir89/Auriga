const User = require('../models/User');
const { response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.createUser = async (req, res) => {

    try {

        // validate if already exists an user with the email
        if (await User.findOne({ 'personalDetails.email': req.body.email })) {
            res.status(400).send(req.body.email + ' already exists');
        }
      
        // create new user
        let user = new User();
        user.personalDetails.firstName = req.body.firstName;
        user.personalDetails.lastName = req.body.lastName;
        user.personalDetails.email = req.body.email;
        user.personalDetails.IDcard = req.body.email;

        //password hash
        user.personalDetails.password = bcrypt.hashSync(req.body.password, 10);

        // save user
        await user.save();


        res.status(200).send('User created');
    }catch(error) {
        res.status(400).send('There was an error');
    }
}


/*exports.authenticate = async ({ email, password }) => {
    console.log('error 1', email, password);
    const user = await User.findOne({ 'personalDetails.email': email });
    console.log(user);

    bcrypt
    .compare(password, user.personalDetails.password)
    .then((isAmatch) => {
        console.log('here');
        if(isAmatch){
            //res.send('you are logged in!')
            console.log('hoy');
            const token = jwt.sign(JSON.stringify(user), "mysupersecret")
            console.log('hi');
            console.log(token);
            return {
                ...user.toJSON(),
                token
            };            
        }else {
            res.send('Incorrect password')
        }

    })


}*/

exports.getUserInfo = async (req, res=response) => {

    try {
        const user = await User.find({});
        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }  
}

