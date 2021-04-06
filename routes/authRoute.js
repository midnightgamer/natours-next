const express = require('express');
const {
   signup,
   login,
   forgotPassword,
   resetPassword,
   updatePassword,
   protect,
   logout,
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.post('/forgetPassword', forgotPassword);
router.patch('/changePassword', protect, updatePassword);
router.patch('/resetPassword/:token', resetPassword);

module.exports = router;
