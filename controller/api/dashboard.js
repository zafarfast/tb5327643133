const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection





router.get('/', async(req,res)=>{

    if (req.session.userloggedin == true)
    {
    const p = await Posts.findAll({where: {email : req.session.email}})
    const j = p.map((i) => i.get({ plain: true }));
    console.log(j)

        res.render('dashboard',{ userloggedin: true, userpost: j})
    }
    else
    {
        res.render('dashboard',{ userloggedin: false})

    }
})

module.exports = router;
