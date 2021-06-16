const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({
    personalDetails:{
        firstName:{type: String, required:true},
        lastName:{type: String, required:true },
        email:{ type: String, required:true, unique:true, lowercase: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], createIndexes: { unique: true } },
        IDcard:{ type:String, unique:true },
        birthDate:{ type:Date },
        nacionality:{ type:Date },
        phoneNumber:{ type: Number, required: true },
        password:{ type: String, required: true },
        address:{ 
            street:{type: String, required:true},
            postalCode:{ type: Number, required:true },
            city:{ type: String, required:true },
            country:{ type: String, required:true}
        },
        jobAddress:{
            street:{ type: String},
            postalCode:{type: Number},
            city:{ type: String},
            country:{type: String}
        },
        workshop:{
            proximity:{
                street:{ type: String},
                postalCode:{type: Number},
                city:{type: String},
                phoneNumber:{type: Number},
                price:{type: Number}
            },
            oficial:{
                street:{ type: String},
                postalCode:{type: Number},
                city:{type: String},
                phoneNumber:{type: Number},
                price:{type: Number}
            },
            multiBrand:{
                street:{ type: String},
                postalCode:{type: Number},
                city:{type: String},
                phoneNumber:{type: Number},
                price:{type: Number}
            }
        }
    },
    cars:[{type:mongoose.Schema.Types.ObjectId, required:true, ref:"Car"}]


}, {timestamps: true})

module.exports = mongoose.model("User", userSchema);