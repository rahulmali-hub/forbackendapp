const mongoose = require('mongoose');

// Define the schema
const categorySchema = new mongoose.Schema({
    category_id: {
        type: Number,
        required: true,
        unique: true
    },
    category_name: {
        type: String,
        required: true
    }
});

// Create the model
const category = mongoose.model('category', categorySchema);

// Export the model
module.exports = category;
