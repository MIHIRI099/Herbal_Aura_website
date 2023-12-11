const express = require('express');
const router = express.Router();

const api = require('../controllers/apiController');

router.get('/products',api.products);


module.exports = router;