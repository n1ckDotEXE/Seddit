'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Comments', [{  
    
        comment_text:"Waffle House" ,
        createdAt: new Date() ,
        updatedAt: new Date,
        post_id: 1,  
        author_id: 3,

        
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {

  }
};
