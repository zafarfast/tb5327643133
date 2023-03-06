const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session');
const sequelize = require('./config/connection');
var validator = require("email-validator");

const path = require('path');
require('dotenv').config();

const {User, Posts, Comments} = require('./model/index');
const { stringify } = require('querystring');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});
app.use(express.json());

// Set Handlebars as the default template engine.
app.engine('handlebars',  exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 

app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('./controllers/routes'));

const sess = {
    secret: process.env.SESSION_SECRET,
    // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
  };

const k = async ()=>{
    const p = await Posts.findAll({include : User})
    const j = p.map((i) => i.get({ plain: true }));
}

k()

  
app.use(session(sess));

app.get('/', async(req,res)=>{


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


app.get('/dashboard', async(req,res)=>{

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


app.get('/signin', (req,res)=>{
    res.render('signin',{})
})


//Middleware to check username/password
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
app.post('/signin', authCheck, async(req,res)=>{
    req.session.email = req.body.email
    res.redirect('/')
})

app.get('/signup', async(req,res)=>{
    res.render('signup',{})
})

app.post('/signup', async(req,res)=>{

    if (validator.validate(req.body.email))
    {
        const checkIfUserExistInDb = await User.findOne({where: {email:req.body.email}})
        if (!checkIfUserExistInDb)
            {
                await User.create({
                name: req.body.name,
                email: req.body.email, 
                password: req.body.password
                });
            
                req.session.userloggedin = true;
                req.session.email = req.body.email;
                res.redirect('/')
            }
        else
        {
            res.send('Email address already exist')

        }
    }
    else
    {
        res.send('Email address is not valid')
    }
})

app.post('/newpost', async(req,res)=>{
    await Posts.create({
        email: req.session.email,
        heading: req.body.heading,
        text: req.body.text, 
    });
    res.send('New post added')
})

app.get('/newpost', async(req,res)=>{
    res.render('newpost',{userloggedin: req.session.userloggedin})
})

app.get('/newcomment/:id', async(req,res)=>{
    res.render('newcomment',{userloggedin: req.session.userloggedin})
})

app.post('/newcommentpost/:id', async(req,res)=>{

if (req.session.userloggedin)
   { const p = await Posts.findOne({where: {id:req.params.id}})
    const o = await Comments.create({
        post_id:req.params.id,
        comment:req.body.text,
        comment_by:req.session.email,
    })
    // const k= await Comments.findOne({where: {id:p.email}})
    res.redirect(`/comments/${req.params.id}`)
    }
    else
    {
        res.redirect('/')
    }
})


app.get('/comments/:id',async (req,res)=>{
    if (req.session.userloggedin)
    {
    const k = await Posts.findOne({where:{id:req.params.id}})

    const p = await Comments.findAll({where:{post_id:req.params.id}})
    const j = p.map((i) => i.get({ plain: true }));

    res.render('comments',{postid: k.id, postheading: k.heading, posttext: k.text, comments: j, userloggedin: req.session.userloggedin})
    }
    else {
        res.redirect('/')
    }

})

app.get('/logout', async(req,res)=>{
    req.session.userloggedin = false;
    req.session.email=''
    res.redirect('/')
})


// Starts the server to begin listening
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
    });
