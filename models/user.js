'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age_group: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};