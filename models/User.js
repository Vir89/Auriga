const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    personalDetails:{
        firstName:{type: String, required:true, trim:true},
        lastName:{type: String, required:true },
        email:{ type: String, required:true, unique:true, trim:true, lowercase: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], createIndexes: { unique: true } },
        IDcard:{ type:String, unique:true, trim:true },
        birthDate:{ type:Date, trim:true },
        nacionality:{ type:String },
        phoneNumber:{ type: Number, required: true },
        password:{ type: String, required: true, trim:true }, 
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
    cars:[{
        staticFeatures:{
            brand:{type: String, required:true},
            model:{type: String, required:true},
            colour:{type: String, required:true},
            horsePower:{type: Number, required:true},
            dataSheet:{type: String},
            Image:{type: String},
            fuel:{type: String, required:true},
            carRegistration:{type: String, required:true, unique:true},
            circulationPermit:{type: String},
        },
        variableFeatures:{
            currentValue:{type: Number},
            kM:{type: Number},
            tires:{
                pressure:{type: String},
                marca:{type: String},
                modelo:{type: String},
                thickness:{type: String},
            },
            insurance:{
                coverage:{type: String},
                dueDate:{type:Date},
                company:{type: String},
            },
            picture:{type: String},
            engine:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            lights:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            headlightTransparency:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            sheetMetal:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            painting:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            wiperWasher:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            brakePad:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            brakeFluid:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            waterLevel:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            coolant:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            ralenti:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            interior:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}
            },
            cleaning:{
                status:{type: String},
                img:{type: String},
                statusDescription:{type: String}

            },

        },
        documentation:{
            invoices:{type: String},
            notes:{
                workshopInterventions:{type: String},
                extras:{type: String},
                invoiceServices:{type: String},
                maintenanceBook:{type: String}
            }
        }
}]
    


}, {timestamps: true})


module.exports = mongoose.model("User", userSchema);