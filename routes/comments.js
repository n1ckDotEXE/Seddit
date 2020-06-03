const express = require('express');
const router = express.Router();
  
const db = require('../models'); 
function checkAuthentication(req, res, next) {
  console.log(req.session.user)
  if (req.session.user) {
    next();
  } else {
    res.send('you are not logged in')
    // res.redirect('/users');
  }
}


// router.use(checkAuthentication) 
router.use(express.static("./public")) 

// retrieve all subseddits
// router.get('/', (req, res) => {
//   db.Comments.findAll()
//     .then(results => {
//       res.json(results);
//     });
// });

// add a post to a subseddit 

router.get("/",(req,res) => { 
  res.render("index2.ejs"), { }
})

router.post('/', (req, res) => {  
  // console.log
    let comment_text = req.body.commentInput 
    let authorid = req.session.user.id
    let post_id = req.body.post.post_id

  db.Comments.create({
    comment_text:comment_text,
    authorid:authorid,
    post_id:post_id
   
  }).then(results => {
    res.json(results);
  }) 

  }
  

);

// update (edit) an existing post on a subseddit
// router.put('/subseddit_id/posts/:post_id', (req, res) => {
//   db.Subseddits.update({

//   })
// });

// delete an existing post on a subseddit
router.delete('/subseddit_id/posts/:post_id', (req, res) => {
  db.Subseddits.destroy({
    where: {
      post_id: req.params.post_id
    }
  }).then(response => {
    res.json(response)
  });
});

module.exports = router;