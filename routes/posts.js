const express = require('express');
const router = express.Router();

const db = require('../models'); 
function checkAuthentication(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.send('you are not logged in')
    // res.redirect('/users');
  }
} 


router.use(checkAuthentication)
router.use(express.static("./public")) 

router.get('/create', (req, res) => {
  res.render('index2.ejs', { 
  
  });
}); 


// retrieve all posts
router.get('/', (req, res) => {
  db.Posts.findAll()
    .then(results => {
      res.json(results);
    });
}); 

router.post('/increment/:id', (req,res)=>{ 
  db.Posts.findAll({where:{id: parseInt(req.params.id)}}) 
     .then(post  =>{  
       post= post[0]
       post.increment("post_leftvotes"); 
       res.json(post)
       })
})


router.post('/create',(req,res,) =>{ 

  

  let title = req.body.input_bar
  let rightVotes = 0
  let leftVotes = 0
  let content = req.body.input_bar2
  let numbOfComments = 0
  let author =req.session.user.id

  
    db.Posts.create({   
      post_title: title, 
      post_rightvotes: rightVotes,  
      post_leftvotes: leftVotes,
      post_data: content, 
      posts_numberOfComments: numbOfComments,  
      author_id: author
    }).then((user) => {  
      console.log(req.body) 
      console.log(req.user)
      req.session.user = user;
      res.redirect('../homeLoggedIn');
    }); 
  });

module.exports = router; 

