'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    post_title: DataTypes.STRING,
    post_author: DataTypes.STRING,
    post_rightvotes: DataTypes.INTEGER,
    post_leftvotes: DataTypes.INTEGER,
    post_comments: DataTypes.STRING,
    posts_numberOfComments: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};