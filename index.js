const express =require ("express");
const {dbConnection} = require('./config');
const cors= require("cors");

const app= express();

const path = require('path');
require('dotenv').config; 

const User = require("./models/User")
const Car = require("./models/Car")

//connection to DB
dbConnection();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 5000 

/* app.get("/user/:id", async(req,res)=>{
    const userId =req.params.id
    const user = await User.findById(id).exec()
    res.status(200).json(user)
});

app.get("/users", async(req,res)=>{
    const users =await User.find({}).lean().exec()
    res.status(200).json(users)
});

app.post("/user", async()=>{
    const userToCreate = req.body.user
    const user = await User.create(userToCreate)
    res.status(201).json(user.toJSON())
}); */

//routes

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