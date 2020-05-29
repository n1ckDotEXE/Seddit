'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    comment_text: DataTypes.STRING ,
    post_id: DataTypes.INTEGER,  
    author_id: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Posts,{foreignKey:'post_id'})
    Comments.belongsTo(models.Users,{foreignKey:'author_id'})
  
  };
  return Comments;
}; 
