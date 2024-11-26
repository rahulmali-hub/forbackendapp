const mongoose=require('mongoose');
const Role_schema=new mongoose.Schema({
    roleid:{
        type:Number,
        required :true,
         unique: true
    },
    role_name :{
        type:String,
        required : true
    },
    role_date :{
        type: Date,
        default: Date.now,
        required: true
    }

})
const roles=mongoose.model('roles_table',Role_schema);
module.exports =roles;