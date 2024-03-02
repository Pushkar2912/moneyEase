const express = require('express');
const { signUp, signIn, getMe } = require('../controllers/auth');
const { verify } = require('../middleware/auth');

const router = express.Router();


router.post('/', signUp);
router.post('/sign-in', signIn);
router.get('/get-me', verify, getMe);

module.exports = router;