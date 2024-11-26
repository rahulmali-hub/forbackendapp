const express=require('express');
const { AdminUserPost } = require('../Controller/Admin_user');

const route2=express.Router();

route2.post('/admin/post',AdminUserPost)

module.exports ={route2}
