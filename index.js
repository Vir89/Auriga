const express =require ("express");
/* const pool =require("./config") */
const morgan = require('morgan')
const app= express();
const cors= require("cors");
const path = require('path');
require('dotenv').config
const port = process.env.PORT || 5000 ; 
const {dbConnection} = require('./config');
const User = require("./models/User")
const Car = require("./models/Car")

//connection to DB
dbConnection();
// global middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Allow cors policies
app.use(cors())

app.get("/user/:id", async(req,res)=>{
    const userId =req.params.id
    const user = await User.findById(id).exec()
    res.status(200).json(user)
});

app.get("/users", async(req,res)=>{
    const users =await User.find({}).lean().exec()
    res.status(200).json(users)
});

app.post("/user", async()=>{
    const userToCreate =req.body.user
    const user = await User.create(userToCreate)
    res.status(201).json(user.toJSON())
});


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