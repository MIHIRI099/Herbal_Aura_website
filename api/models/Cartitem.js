const mongoose = require('mongoose');
const {Schema} = mongoose;
const CartSchema = new Schema({
        id: Number,
        name: String,
        price: Number,
        image: String,
        catagory: String,
        description: String,
});

const CartModel = mongoose.model('Cartitem',CartSchema);

module.exports = CartModel;