const express = require('express');
const app = express();
const mongoose = require('mongoose');
//const jwt = require('jsonwebtoken');
//const bcrypt = require('bcryptjs');
//const User = require('./models/user');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userroutes');


//const bcryptSalt = bcrypt.genSaltSync(10);
//const jwtSecret = 'sdfghjklvbnmghjkfgh';

app.use(express.json());
app.use(cookieParser());
app.use(cors(
{       origin: 'http://localhost:5173',
        credentials: true
}
));


mongoose.connect('mongodb+srv://mihirie1:mihiri@cluster0.yatakqr.mongodb.net/?retryWrites=true&w=majority');

app.use('/user',userRouter);

app.get('/test',(req,res) => {
        res.json('test ok');
});



// app.post('/register', async(req,res) => {
//  const {full_name,email,password,delivery_address,phone_number} = req.body; 
//  try{
//  const userDoc = await User.create({
//         full_name,
//         email,
//         password:bcrypt.hashSync(password,bcryptSalt),
//         delivery_address,
//         phone_number,
// }); 
//  res.json(userDoc);
// }
// catch(err){
//         res.status(422).json(err);
// }
// }); 



//   app.post('/login', async (req, res) => {
//         const { email, password } = req.body;
//         const userDoc = await User.findOne({ email });
    
//         if (userDoc) {
//             // Check if the provided password matches the stored password
//             const passwordMatch = bcrypt.compareSync(password, userDoc.password);
//             if (passwordMatch) {
//                 // Passwords match, login is successful
//                 jwt.sign({
//                     email:userDoc.email,
//                     id:userDoc._id, 
//                     full_name:userDoc.full_name},
//                     jwtSecret,{},(err,token) => { 
//                     if (err) throw err;
//                     res.cookie('token',token).json(userDoc);
//                 });
                
//             } else {
//                 // Passwords do not match, login failed
//                 res.status(401).json({ status: 'error', message: 'Login failed' });
//             }
//         } else {
//             // User not found, login failed
//             res.status(401).json({ status: 'error', message: 'Login failed' });
//         }
//     });
    
//     app.get('/profile',(req, res) => {
//        const token = req.cookies.token;
//          if(token){
//             jwt.verify(token,jwtSecret,{},async(err,user) => {
//                 if(err) throw err;
//                 const {full_name,email,_id} = await User.findById(userData.id);
//                 res.json({full_name,email,_id});
//             });
//         }
//         else{
//             res.status(401).json({status:'error',message:'Not authorized'});
//         }
//     });

app.listen(9000);   
