'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    post_title: DataTypes.STRING,
    post_rightvotes: DataTypes.INTEGER,
    post_leftvotes: DataTypes.INTEGER,
    post_comments: DataTypes.STRING,
    posts_numberOfComments: DataTypes.INTEGER ,
    author_id:DataTypes.INTEGER ,
    
  }, {});
  Posts.associate = function(models) { 
    Posts.hasMany(models.Comments, {foreignKey:'comment_id'} )
    Posts.belongsTo(models.Users,{foreignKey:'author_id'})

    
  };
  return Posts;
};