const mongoose = require("mongoose");
require('dotenv').config({ path: '.env' });

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log ('DB online')

    } catch(error){
        console.log("something fail during the connection")
        console.log(error)
        throw new Error("error al inicializar la base de datos")

    }
}

module.exports={
    dbConnection
}