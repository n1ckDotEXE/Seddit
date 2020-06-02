'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        first_name: 'John Doe',
        user_name: 'username',
        email: 'email',
        password: 'password',
        age_group: 1, 
        profile_pic:"cow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
       { 
         first_name:  "Parker",
        user_name: "Spiderman321",
        email:  "parker@dontexist.com",
        password: "7768", 
        age_group: 0, 
        profile_pic:"alien",
        createdAt: new Date(),
        updatedAt: new Date() 
      },
        
        { 
        first_name:  "Chris",
        user_name: "ChrispyKreme",
        email:  "chris@dontexist.com",
        password:  "7769",
        age_group: 0, 
        profile_pic: 'chicken',
        createdAt: new Date(),
        updatedAt: new Date()  
       }, 
        
        { 
        first_name: "Nick",
        user_name: "$aint_nick",
        email: "nick@dontexist.com",
        password:  "7770",
        age_group: 0, 
        profile_pic:'moose',
        createdAt: new Date(),
        updatedAt: new Date() 
       }
        
    
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
