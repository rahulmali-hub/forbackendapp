const express=require('express');
const { RoleAssignPost, getAllUserDetailsWithRoles } = require('../Controller/RoleAssign');



const roleassignroute=express.Router();

roleassignroute.post('/admin/roleassign',RoleAssignPost)
roleassignroute.get('/admin/getdeatails',getAllUserDetailsWithRoles)

module.exports ={roleassignroute}
