const mongoose= require('mongoose')
const connection=async ()=>{
    try{
        const con =await mongoose.connect('mongodb+srv://rahulmali08277:9mTgtk7M7ZRvQsRe@cluster0.lwo23.mongodb.net/')
        console.log("Database connected successfully")
    }catch(err){
        console.log(err,"database is not connected")

    }
}
module.exports =connection