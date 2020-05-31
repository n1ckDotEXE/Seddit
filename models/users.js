'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    first_name:{ 
      type: DataTypes.STRING, 
      allowNull:false
    },
    user_name:{ 
      type: DataTypes.STRING, 
      allowNull:false

    } ,
    email:{ 
      type: DataTypes.STRING, 
      validate: { 
        isEmail: true
      }
    },  
    password:{ 
      type: DataTypes.STRING,
      allowNull:false
    }, 
    age_group: {
      type: DataTypes.INTEGER, 
      allowNull:false
    }
  }, {});
  Users.associate = function(models) { 

    Users.hasMany(models.Posts, {foreignKey: 'author_id'})
	  Users.hasMany(models.Comments, {foreignKey: 'author_id'})

  };
  return Users;
};