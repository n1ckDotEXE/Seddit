'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    comment_username: DataTypes.STRING,
    comment_text: DataTypes.STRING
  }, {});
  Comments.associate = function(models) {
    Comments.belongsTo(models.Posts,{foreignKey:'id'})
    Comments.belongsTo(models.Users,{foreignKey:'id'})
  
  };
  return Comments;
};