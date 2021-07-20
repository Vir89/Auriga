const express =require ("express");
const {dbConnection} = require('./config');
const cors= require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app= express();

const path = require('path');
require('dotenv').config; 

const User = require("./models/User");
const Car = require("./models/Car");
const userController = require("./controllers/userController");
const { connection } = require("mongoose");

//connection to DB
dbConnection();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())


const port = process.env.PORT || 5000 


//Register user
app.post('/register', (req, res) => {
    bcrypt
    .hash(req.body.password,10)
    .then(hashedPassword => {
        userController.createUser(req, res);
    })
    .catch(hashError => console.error('Error with encoding your password.Error: ${hashError}'))
})

//Login user

app.post('/login', async (req, res, next) => {

    const user = await User.findOne({ 'personalDetails.email': req.body.email });

    if(user){
        bcrypt
        .compare(req.body.password, user.personalDetails.password)
        .then((isAmatch) => {
            if(isAmatch){
                const token = jwt.sign(JSON.stringify(user), "mysupersecret")
                return user 
                    ? res.json({user, token})  
                    : res.status(400).json({ message: 'Email or password is incorrect' })
        
            }else {
                res.status(400).send('Incorrect password')
            }
    
        })
    } else {
        res.status(400).send('Email or password is incorrect')
    }
})


app.get('/users', async (req, res, next) => {

    const user = await User.find({});

    if(user){
        res.json({user})
    } else {
        res.status(500).send('Unexpected error')
    }
})
app.use('/api/users', require('./routes/users'))


app.listen(port,(err)=>{
    if(err) throw new Error("Something failed")
    console.log(`Server is running on port ${port}`)
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    });
}