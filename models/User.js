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
        suscriptor:{ type: Boolean, required: true },
        suscriptionPlan:{type: String},
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
            year:{type: Number, required:true},
            model:{type: String, required:true},
            color:{type: String, required:true},
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
            nextMaintenance:{type: Number},
            status:{
                administration:[{
                        title:{type: String},
                        alert: {type: String},
                        coverage:{type: String},
                        dueDate:{type:Date},
                        type:{type: String},
                        company:{type: String},
                        status:{type: String},
                        img:{type: String},
                        statusDescription:{type: String},
                        isOk:{type: Boolean},
                        isSerious:{type: Boolean},
                        amount:{type: Number},
                        
                    }],
                exterior:[{
                    title:{type: String},
                    dueDate:{type:Date},
                    type:{type: String},
                    isSerious:{type: Boolean},
                    img:{type: String},
                    statusDescription:{type: String},
                    isOk:{type: Boolean}
                }],
                tires:[{
                    title:{type: String},
                    dueDate:{type:Date},
                    type:{type: String},
                    isSerious:{type: Boolean},
                    img:{type: String},
                    statusDescription:{type: String},
                    pressure:{type: Number},
                    marca:{type: String},
                    modelo:{type: String},
                    thickness:{type: Number},
                    isOk:{type: Boolean}
                }],
                engine:[{
                    title:{type: String},
                    dueDate:{type:Date},
                    type:{type: String},
                    isSerious:{type: Boolean},
                    img:{type: String},
                    statusDescription:{type: String},
                    isOk:{type: Boolean}
                }],
                interior:[{
                    title:{type: String},
                    alert:{type:String},
                    dueDate:{type:Date},
                    type:{type: String},
                    isSerious:{type: Boolean},
                    img:{type: String},
                    statusDescription:{type: String},
                    isOk:{type: Boolean}
                }],
                driving:[{
                    title:{type: String},
                    dueDate:{type:Date},
                    type:{type: String},
                    isSerious:{type: Boolean},
                    img:{type: String},
                    statusDescription:{type: String},
                    isOk:{type: Boolean}
                }],
                other:[{
                    title:{type: String},
                    dueDate:{type:Date},
                    isSerious:{type: Boolean},
                    type:{type: String},
                    status:{type: String},
                    img:{type: String},
                    isOk:{type: Boolean},
                    statusDescription:{type: String},
                }],

            },
            
            picture:{type: String},
            cleaning:{
                lastCleaning:{type:Date},
                cleaningType:{type: String},  

            }
           
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