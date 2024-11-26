const category=require('../schemas/Categary.js')
const categoryPost=async (req,res)=>{
    try{
        const data=req.body;
        const newCategary= new category(data);
        const response= await newCategary.save();
        console.log('Posted')
        res.status(200).json(response);
    }catch(err){
        res.status(500).json({message:'data not post'})
    }
}
const Getcategory=async (req,res)=>{
    try{
        const categories = await category.find();
        // const response=await category.findAll();
        // res.status(200).json(response)
        res.status(200).json(categories);
        // res.send(categories)
    }catch(err){
        res.status(500).json({message:'data not get'})
    }
}
const updateCategory= async (req,res)=>{
    try{
        const category_Id=req.params.category_id;
        const categories=await category.findOneAndUpdate({category_id:category_Id}, {$set:req.body},{new:true})
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
}
const DeleteCategory=async (req,res)=>{
    try{
        const category_Id=req.params.category_id;
        const categories=await category.deleteOne({category_id:category_Id})
        res.status(200).json(categories)
    }catch(err){
        res.status(500).json(err)
    }
}
module.exports ={categoryPost, Getcategory,updateCategory,DeleteCategory};