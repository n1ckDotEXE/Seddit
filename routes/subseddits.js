const express = require('express');
const router = express.Router();
  
const db = require('./models');

// retrieve all subseddits
router.get('/', (req, res) => {
  db.Subseddits.findAll()
    .then(results => {
      res.json(results);
    });
});

// add a post to a subseddit
router.post('/:subseddit_id/posts', (req, res) => {
  db.Subseddits.create({
    post_id: req.params.post_id,
    post_title: req.params.post_title,
    post_text: req.params.post_text
  }).then(response => {
    res.json(response);
  });
});

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