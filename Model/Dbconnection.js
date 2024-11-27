const mongoose= require('mongoose')
// const dburl=process.env.MONGO_DB
const connection=async ()=>{
    try{
        const con =await mongoose.connect(process.env.MONGO_DB)
        console.log("Database connected successfully")
    }catch(err){
        console.log(err,"database is not connected")

    }
}
module.exports =connection