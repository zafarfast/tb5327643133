const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection



async function authCheck(req,res,next)
{
    const p = await User.findOne({where: {email:req.body.email}})
    
    if (p==null)
    {
        res.send('Username or password is incorrect')
    }

    else if (req.body.email == p.email & req.body.password == p.password)
    {
        req.session.userloggedin = true
        return next()
    }
    else
    {
        res.send('Username or password is incorrect')
    }

}


router.get('/', (req,res)=>{
    res.render('signin',{})
})



router.post('/', authCheck, async(req,res)=>{
    req.session.email = req.body.email
    res.redirect('/')
})


module.exports = router;
