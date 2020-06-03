const express = require('express');
const router = express.Router();
const { Op } = require('sequelize');
const db = require('../models');

router.post('/', (req, res) => {
  db.Posts.findAll( {where: {
    [Op.or]: [
      {post_title: {
        [Op.iLike]: `%${req.body["search-input"]}%`
      }},
      {post_data: {
        [Op.iLike]: `%${req.body["search-input"]}%`
      }}]
    }}).then(posts => {
      posts = posts.map(result => {  
        let title = result.post_title;
        let content = result.post_data; 
        let id = result.id; 
        let post_leftvotes = result.post_leftvotes; 
        let post_rightvotes = result.post_rightvotes;
        return {title,content,id,post_leftvotes,post_rightvotes}     
      })
      res.render("index", { 
        display:"false",
        notshown:"notshown", 
        posts:posts
      })
    }) 
})

module.exports = router;