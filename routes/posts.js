const express = require('express');
const router = express.Router();

const db = require('./models');

// retrieve all posts
router.get('/', (req, res) => {
  db.Posts.findAll()
    .then(results => {
      res.json(results);
    });
});

module.exports = router;