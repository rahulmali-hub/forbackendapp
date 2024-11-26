const express=require('express');
const { RolePost, Getroles } = require('../Controller/Roles_controller');


const route3=express.Router();

route3.post('/admin/rolepost',RolePost)
route3.get('/admin/roles',Getroles)

module.exports ={route3}
