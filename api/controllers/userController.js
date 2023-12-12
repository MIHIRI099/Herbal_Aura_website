const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/Cartitem');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwtSecret = 'sdfghjklvbnmghjkfgh';

const test = (req,res) => {
        res.json('test ok');
};

const login = async (req,res) => {
    //console.log(req.body);
    const { email, password } = req.body;
    //print the email and password
    //console.log(email);    
    try{
        const userDoc = await User.findOne({ email });
        console.log(userDoc);
        if (userDoc) {
            // Check if the provided password matches the stored password
            const passwordMatch = bcrypt.compareSync(password, userDoc.password);
            if (passwordMatch) {
                // Passwords match, login is successful
                jwt.sign({
                    email:userDoc.email,
                    id:userDoc._id, 
                    full_name:userDoc.full_name},
                    jwtSecret,{},(err,token) => { 
                    if (err) throw err;
                    return res.cookie('token',token).json(userDoc);
                });
                
                
            } else {
                // Passwords do not match, login failed
                return res.status(401).json({ status: 'error', message: 'Login failed' });
            }
        } else {
            // User not found, login failed
            return res.status(401).json({ status: 'error', message: 'Login failed' });
        }
    }catch(err){
        return res.status(500).json({ status: 'error', message: 'Login failed' });
    }
};

const register = async (req,res) => {
    const {full_name,email,password,delivery_address,phone_number} = req.body; 
    try{
        const userDoc = await User.create({
            full_name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
            delivery_address,
            phone_number,
        }); 
        return res.json(userDoc);
    }
    catch(err){
        return res.status(422).json(err);
    }
}

const profile = (req, res) => {
    const token = req.cookies.token;
    if(token){
        jwt.verify(token,jwtSecret,{},async(err,user) => {
            if(err) return res.status(401).json({status:'error',message:'Unauthorized'});
            const userDoc = await User.findById(user.id);
            return res.json(userDoc);
        });
    }
    else{
        return res.status(401).json({status:'error',message:'Unauthorized'});
    }
}

const addToCart = async (req,res) => {
    try{
        const productId = req.body.productId;
        console.log(productId);
        const productDoc = await Product.findOne({id : productId});
        console.log(productDoc);
        const cartDoc = await Cart.create({
            id:productDoc.id,
            name:productDoc.name,
            price:productDoc.price,
            image:productDoc.image,
            catagory:productDoc.catagory,
            description:productDoc.description,
        });
    }catch(err){
        return res.status(500).json({status:'error',message:'Internal Server Error'});
    }   
    
}

const getCart = async (req,res) => {
    try{
        console.log('get cart');
        const cartDoc = await Cart.find();
        return res.json(cartDoc);
    }catch(err){
        return res.status(500).json({status:'error',message:'Internal Server Error'});
    }
}

const deleteCart = async (req,res) => {
    try{
        console.log('delete cart');
        const Id = req.body.itemId;
        const cartDoc = await Cart.findOneAndDelete({id:Id});
        return res.json(cartDoc);
    }catch(err){
        return res.status(500).json({status:'error',message:'Internal Server Error'});
    }
}

const numCart = async (req,res) => {
    try{
        //return the number of items in the cart
        const cartDoc = await Cart.find();
        return res.json(cartDoc.length);
    }catch(err){
        return res.status(500).json({status:'error',message:'Internal Server Error'});
    }
}




module.exports = {
    test,
    login,
    register,
    profile,
    addToCart,
    getCart,
    deleteCart,
    numCart,
};
