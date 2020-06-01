const express = require('express');
const bodyParser = require('body-parser'); 
const db = require('./models'); 

const app = express();
const session = require('express-session'); 
const cookieParser = require('cookie-parser')


const PORT = process.env.PORT || 3000;

const userRouter = require('./routes/users');
const subsedditRouter = require('./routes/subseddits');
const postRouter = require('./routes/posts');

app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use(cookieParser()); 
app.use(session({ 
  secret:'secret', 
  resave:false, 
  saveUninitialized: true, 
  cookie: { 
    secure:false, 
    maxAge: 2592000
  }


}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get

app.get("/home",(req,res)=> { 
  
  db.Posts.findAll().then(results => { 
    let posts = results.map(result => {  
      console.log(result)
      let title = result.post_title;
      let content = result.post_data;
      return {title,content}
      
    } )
    res.render("index", { 
      display:"false",
      notshown:"notshown" , 
      posts:posts
    })

  })

}) 

app.get('/blue', (req,res)=> { 

  console.log("blue")
})


app.use('/users', userRouter);
app.use('/subseddits', subsedditRouter);
app.use('/posts', postRouter); 



app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`)
});

module.exports = app; 

