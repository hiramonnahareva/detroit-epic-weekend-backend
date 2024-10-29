const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/itineraryRoutes.js', itineraryRoutes.js);

module.exports = router;
