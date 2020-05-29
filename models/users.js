'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    first_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age_group: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) { 

    Users.hasMany(models.Posts, {foreignKey: 'id'})
	  Users.hasMany(models.Comments, {foreignKey: 'id'})

  };
  return Users;
};