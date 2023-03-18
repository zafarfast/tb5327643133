const router = require('express').Router(); //Import express router function
const { Comments, Posts, User } = require('../../model'); //Import Hotel, User and Review tables from models folder
const sequelize = require('../../config/connection'); // Adding MySQL daatbase connection
const bcrypt = require('bcrypt'); //Import bcrypt module to encrypt passwords



async function authCheck(req, res, next) {
    const p = await User.findOne({ where: { email: req.body.email } })

    if (p == null) {
        res.send('Username or password is incorrect')
    }

    else if (req.body.email == p.email) {
        let checkPass = false;

        bcrypt.compare(req.body.password, p.password, (err, result) => {
            checkPass = result
            if (checkPass == true) {
                console.log("reached here")
                req.session.userloggedin = true
                return next()

            }
            else {
                console.log("reached here2")
                res.send('Username or password is incorrect')

            }
            ;
        })
    }
    else {
        res.send('Username or password is incorrect')
    }

}


router.get('/', (req, res) => {
    res.render('signin', {})
})



router.post('/', authCheck, async (req, res) => {
    req.session.email = req.body.email
    res.redirect('/')
})


module.exports = router;
