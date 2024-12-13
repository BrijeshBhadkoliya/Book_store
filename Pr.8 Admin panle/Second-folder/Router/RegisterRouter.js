const express = require('express');
const  router = express.Router();


const { Rgister , Login , RegisterAddData, LoginData, forgotpassword , getOtp } = require('../controller/Registercontroller');
const passport = require('passport');


// Request Url Data 


router.get('/', Rgister)
// router.get('/login',passport.authenticate('local',{failureRedirect:'/'}), Login)
router.get('/login',Login)

router.post('/rgisterdata',RegisterAddData)
router.post('/logindata',passport.authenticate('local',{failureRedirect:'/'}), LoginData)
router.get('/forgot-password', forgotpassword)
router.post('/getOtp', getOtp)
// Export Router 
module.exports = router;