const {Schema, model}= require('mongoose');

const UserSchema = Schema({
    personalDetails:{
        firstName:{
            type: String,
            required:true,
        
        },
        lastName:{
            type: String,
            required:true,
        
        },
        email:{
            type: String,
            required:true,
            unique:true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
            createIndexes: { unique: true },
        },
        IDcard:{
            type:String,
        },
        birthDate:{
            type:Date,
        },
        phoneNumber:{
            type: Number, 
            required: true 
        },
        password:{
            type: String, 
            required: true 
        },
        address:{
            street:{
                type: String,
                required:true,
            },
            postalCode:{
                type: Number,
                required:true,
            },
            city:{
                type: String,
                required:true,

            },
            country:{
                type: String,
                required:true,
            },
            

        },
        jobAddress:{
            street:{
                type: String,
                required:true,
            },
            postalCode:{
                type: Number,
                required:true,
            },
            city:{
                type: String,
                required:true,

            },
            country:{
                type: String,
                required:true,
            },
        }, 
        workshop:{
            proximity:{
                street:{
                    type: String,
                    required:true,
                },
                postalCode:{
                    type: Number,
                    required:true,
                },
                city:{
                    type: String,
                    required:true,
    
                },
                phoneNumber:{
                    type: Number,
                    required:true,
                },
                price:{
                    type: Number,
                    required:true,
                },
            },
            oficial:{
                street:{
                    type: String,
                    required:true,
                },
                postalCode:{
                    type: Number,
                    required:true,
                },
                city:{
                    type: String,
                    required:true,
    
                },
                phoneNumber:{
                    type: Number,
                    required:true,
                },
                price:{
                    type: Number,
                    required:true,
                },


            },
            multiBrand:{
                street:{
                    type: String,
                    required:true,
                },
                postalCode:{
                    type: Number,
                    required:true,
                },
                city:{
                    type: String,
                    required:true,
    
                },
                phoneNumber:{
                    type: Number,
                    required:true,
                },
                price:{
                    type: Number,
                    required:true,
                },


            }

        }



    },
}, {timestamps: true})