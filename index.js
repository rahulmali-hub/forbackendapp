const express=require('express')
const  {cat}=require('./Route/Categary.js')
const connection=require('./Model/Dbconnection.js');
const { route2 } = require('./Route/Admin_Route.js');
const { route3 } = require('./Route/Role_route.js');
const { roleassignroute } = require('./Route/RoleAssign.js');
const cors=require('cors')

const app=express();
app.use(express.json())
app.use(cors())
const port=3700;

connection();

app.use('/',cat)
app.use('/',route2)
app.use('/',route3)
app.use('/',roleassignroute)


app.listen(port,()=>{
    console.log(`application runing on port ${port}`)
})