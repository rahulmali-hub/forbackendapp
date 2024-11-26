const express = require('express');
const { categoryPost, Getcategory, updateCategory, DeleteCategory } = require('../Controller/Categary.js');  // Updated import to match the corrected controller

const cat = express.Router();

// Define the POST route for creating a new category
cat.post('/api/post', categoryPost);
cat.get('/api/get',Getcategory)
cat.put('/api/update/:category_id',updateCategory)
cat.delete('/api/delete/:category_id',DeleteCategory)

module.exports = {cat};  // Export the router directly without wrapping in an object
