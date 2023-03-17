const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection

router.get('/', async(req,res)=>{
    req.session.userloggedin = false;
    req.session.email=''
    res.redirect('/')
})

module.exports = router;
