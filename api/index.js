const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
require('dotenv').config();
const cors = require('cors');

app.use(express.json());

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;

app.use(cors(
{       origin: 'http://localhost:5173',
        credentials: true
}
));


mongoose.connect('mongodb+srv://mihirie1:MIHIRI@cluster0.mrk5x5u.mongodb.net/?retryWrites=true&w=majority');


app.get('/test',(req,res) => {
        res.json('test ok');
});



app.post('/register', async(req,res) => {
 const {name,email,password} = req.body; 
 try{
 const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password,bcryptSalt),
}); 
 res.json(userDoc);
}
catch(err){
        res.status(422).json(err);
}
}); 



  app.post('/login', async (req, res) => {
        const { email, password } = req.body;
        const userDoc = await User.findOne({ email });
    
        if (userDoc) {
            // Check if the provided password matches the stored password
            const passwordMatch = bcrypt.compareSync(password, userDoc.password);
            if (passwordMatch) {
                // Passwords match, login is successful
                jwt.sign({ email: userDoc.email , id:userDoc._id }, process.env.JWT_SECRET, { expiresIn: '1h'});
                res.cookie('token',token).json({ status: 'success', message: 'Login successful' });
            } else {
                // Passwords do not match, login failed
                res.status(401).json({ status: 'error', message: 'Login failed' });
            }
        } else {
            // User not found, login failed
            res.status(401).json({ status: 'error', message: 'Login failed' });
        }
    });
    
app.listen(9000);   
