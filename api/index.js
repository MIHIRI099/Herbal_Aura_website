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
const apiRouter = require('./routes/apiroutes');


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
app.use('/api',apiRouter);

app.get('/test',(req,res) => {
        res.json('test ok');
});

app.listen(9000);   
