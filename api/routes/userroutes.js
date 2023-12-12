const express = require('express');
const router = express.Router();

const user = require('../controllers/userController');

router.get('/test',user.test);
router.post('/login',user.login);
router.post('/register',user.register);
router.get('/profile',user.profile);
router.get('/test',user.test);
router.post('/addcart',user.addToCart);
router.get('/cart',user.getCart);
router.post('/deletecart',user.deleteCart);
router.get('/numcart',user.numCart);
router.post('/updatecart',user.updateCart);


module.exports = router;