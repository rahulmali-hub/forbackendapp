// const admin_user=require('../schemas/User_registration')
const roles= require('../schemas/Roles')
const RolePost=async (req,res)=>{
    try{
        const data=req.body;
        const newUser= new roles(data);
        const response= await newUser.save();
        console.log('Role Posted')
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({message:'role not post'})
    }
}
const Getroles= async(req,res)=>{
    try{
        const response= await roles.find();
        console.log('roles get successfully')
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({message:err})
    }
}
module.exports ={RolePost,Getroles}