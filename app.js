const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./models'); 
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const postRouter = require('./routes/posts');
const searchRouter = require('./routes/searches');

app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 600000,
    },
  })
);

function checkAuthentication(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send('you are not logged in')
  }
}

app.get("/",(req,res)=> {  
  db.Posts.findAll().then(results => { 
    let posts = results.map(result => {  
      let title = result.post_title;
      let content = result.post_data;
      return {title,content}     
    })
    res.render("index", { 
      display:"false",
      notshown:"notshown", 
      posts:posts
    })
  })
}) 

app.get("/home",(req,res)=> {  
  db.Posts.findAll().then(results => { 
    let posts = results.map(result => {  
      let title = result.post_title;
      let content = result.post_data; 
      let id = result.id; 
      let post_leftvotes = result.post_leftvotes; 
      let post_rightvotes = results.post_rightvotes;
      return {title,content,id,post_leftvotes,post_rightvotes}     
    })
    res.render("index", { 
      display:"false",
      notshown:"notshown", 
      posts:posts
    })
  })
}) 

app.get('/homeLoggedIn', (req, res) => {
  db.Posts.findAll().then(results => { 
    let posts = results.map(result => {  
      let title = result.post_title;
      let content = result.post_data;
      return {title,content}     
    })
   
    res.render('index2', {
      username: req.session.user.first_name,
      profilePic:`images/${req.session.user.profile_pic}.png`,
      display:'false', 
      notshown: 'notshown',
      posts: posts 
    } 
    )
  })
})

app.use('/users', userRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postRouter);
app.use('/searches', searchRouter);

app.get('/dashboard', checkAuthentication, (req, res) => {
  res.send('This is the Dashboard and you are logged in');
});

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`)
});

module.exports = app;