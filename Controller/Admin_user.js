const admin_user=require('../schemas/User_registration')
const AdminUserPost=async (req,res)=>{
    try{
        const data=req.body;
        const newUser= new admin_user(data);
        const response= await newUser.save();
        console.log('Posted')
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({message:'data not post'})
    }
}
module.exports ={AdminUserPost}