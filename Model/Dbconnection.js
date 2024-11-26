const mongoose= require('mongoose')
const connection=async ()=>{
    try{
        const con =await mongoose.connect('mongodb://127.0.0.1:27017/e_commerce')
        console.log("Database connected successfully")
    }catch(err){
        console.log(err,"database is not connected")

    }
}
module.exports =connection