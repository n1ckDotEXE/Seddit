const express = require('express');
const router = express.Router();

const db = require('../models');

// // retrieve list of all users
// router.get('/', (req, res) => {
//   db.Users.findAll()
//     .then(results => {
//       res.render('index.js',{ 
//         hidden:"hidden"
//       });
//     });
// });
router.use(express.static('./public'));

router.get('/create-account', (req, res) => {

      res.render('index.ejs', { 
        display:"true", 
        shown:"shown"
      });
    });



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