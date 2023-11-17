const User = require('../models/user');
const bcrypt = require('bcryptjs');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwtSecret = 'sdfghjklvbnmghjkfgh';

const test = (req,res) => {
        res.json('test ok');
};

const login = async (req,res) => {
    console.log(req.body);
    const { email, password } = req.body;
    //print the email and password
    console.log(email);    
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




module.exports = {
    test,
    login,
    register,
    profile,
};
