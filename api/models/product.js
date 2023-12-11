const mongoose = require('mongoose');
const {Schema} = mongoose;
const ProductSchema = new Schema({
        id: Number,
        name: String,
        price: Number,
        image: String,
        catagory: String,
        description: String
});

const ProductModel = mongoose.model('Product',ProductSchema);

module.exports = ProductModel;