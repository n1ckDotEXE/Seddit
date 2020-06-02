const express = require('express');
const router = express.Router();

const db = require('../models'); 


// retrieve all posts
router.get('/', (req, res) => {
  db.Posts.findAll()
    .then(results => {
      res.json(results);
    });
});

module.exports = router; 
router.posts("/posts",checkAuthentication, (req,res))
router.post('/posts', (req,res,) =>{ 
  const title = req.body.
  const rightVotes = 0
  const leftVotes = 0
  const Data = 
  const numbOfComments = 0
  const author =req.Users

  
//     db.Posts.create({   
//       post_title: first_name, 
//       post_rightVotes: user_name,  
//       post_leftvotes:email,
//       post_data: hash, 
//       posts_numberOfComments: age_group,  
//       author_id:
//     }).then((user) => { 
//       req.session.user = user;
//       res.redirect('../home');
//     }); 
//   );
// });