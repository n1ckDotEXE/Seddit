const express = require('express');
const router = express.Router();
const db = require('../models'); 
const bcrypt = require('bcrypt');

<<<<<<< HEAD
=======
router.get('/create-account', (req, res) => {

      res.render('index.ejs', { 
        display:"true", 
        shown:"shown",
      });
>>>>>>> 57b76f3ea5a9647095760a5fdc3e724087fd4d7c
router.use(express.static('./public'));

router.get('/create-account', (req, res) => {
  res.render('index.ejs', { 
    display:"true", 
    shown:"shown"
  });
}); 

router.post('/create-account', (req,res,) =>{ 
  const first_name = req.body.first_name_input;
  const user_name = req.body.username_input;
  const email = req.body.email_input;
  const password = req.body.password_input;
  const age_group = req.body.over_under_18_input;

  bcrypt.hash(password, 10, (err, hash) => {
    db.Users.create({   
      first_name: first_name, 
      user_name: user_name,  
      email:email,
      password: hash, 
      age_group: age_group,
    }).then((user) => { 
      req.session.user = user;
      res.redirect('../home');
    }); 
  });
});
 
router.post('/login', (req,res) => { 
  const { user_name, password } = req.body;

  db.Users.findOne({ where: { user_name } }) 
    .then((Users) => {
      bcrypt.compare(password, Users.password, (err, match) => { 
        if (match) { 
          req.session.user = Users; 
          res.redirect('../home');
        } else { 
          res.send('Incorrect Password');
        }
      });
    })
    .catch(() => {
      res.send('username not found');
    });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/home');
})

// // retrieve a user info (username, password, email, karma, subscriptions, posts, comments)
// router.get('/:user_id', (req, res) => {
//   db.Users.findPk(req.params.user_id)
//     .then(results => {
//       res.json(results)
//       // res.render()
//     });
// });

// // retrieve list of subseddits subscribed by a user
// router.get('/:user_id/subscriptions', (req, res) => {
//   db.Users.findPk(req.params.subscriptions)
//     .then(results => {
//       res.json(results)
//     });
// });

// // retrieve all the posts written by a user
// router.get('/:user_id/posts', (req, res) => {
//   db.Users.findAll()
//     .then(results => {
//       res.json(results)
//     });
// });

// // retrieve all the comments written by a user
// router.get('/:user_id/comments', (req, res) => {
//   db.Users.findAll()
//     .then(results => {
//       res.json(results)
//     });
// });

router.post('/',)

module.exports = router;