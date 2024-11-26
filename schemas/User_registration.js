const mongoose=require('mongoose');
const admin_schema=new mongoose.Schema({
    userid:{
        type:Number,
        required :true,
         unique: true
    },
    user_name :{
        type:String,
        required : true
    },
    password :{
        type: String,
        required : true
    },
    status :{
        type: String,
        required:true
    },
    registration_date :{
        type: Date,
        default: Date.now,
        required: true
    }

})
const admin_user=mongoose.model('admin_user_registration',admin_schema);
module.exports =admin_user;