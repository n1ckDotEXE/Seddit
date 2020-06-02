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


router.post('/',checkAuthentication, (req,res,) =>{ 
  const title = req.body.input_bar
  const rightVotes = 0
  const leftVotes = 0
  const data = req.body.input_bar2
  const numbOfComments = 0
  const author =req.session.user

  
    db.Posts.create({   
      post_title: title, 
      post_rightVotes: rightVotes,  
      post_leftvotes: leftVotes,
      post_data: data, 
      posts_numberOfComments: numbOfComments,  
      author_id: author
    }).then((user) => { 
      req.session.user = user;
      res.redirect('../home');
    }); 
  });

module.exports = router; 

