const User = require('../models/user');
const Products = require('../models/product');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwtSecret = 'sdfghjklvbnmghjkfgh';

const products = async (req,res) => {
    console.log('products');
    try{
        const products = await Products.find();
        res.json(products);
    }catch(err){
        res.json({message:err});
    }
}

module.exports = {
    products
};