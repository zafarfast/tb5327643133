const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../config/connection'); // Adding MySQL daatbase connection


router.get('/', async(req,res)=>{

console.log("home route request received")
    if (!req.session.userloggedin)
    {
        req.session.userloggedin=false
    }
    const k = async ()=>{
        const p = await Posts.findAll({include : User})
        const j = p.map((i) => i.get({ plain: true }));
        for (i=0; i<j.length; i++)
        {
            j[i].date = j[i].date.toDateString();
        }
        res.render('homepage',{ blogs: j, userloggedin: req.session.userloggedin})
    }
    
    k()
    })
    

module.exports = router;
