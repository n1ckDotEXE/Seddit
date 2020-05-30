'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  

      return queryInterface.bulkInsert('Posts', [{ 
        post_title: "Hottest restaurants in Atlanta",  
        author_id: 1  ,
        post_rightvotes: 0 ,
        post_leftvotes: 0 , 
        post_data: "My boyfriend and i just moved to Atlanta. We’ve been here for a couple of weeks now however a lot of our stuff , like pots, pans, and kitchen utensils are in the process of being sent. Do yall have any good restaurant recommendations?", 
        posts_numberOfComments: 0, 
        createdAt: new Date(),
        updatedAt: new Date() 
      }, 
      { 
        post_title: "Tiger King, Yay or Nay?",
        post_data: "Has anyone watched Tiger King on Netflix? This is probably one of the most twist turning documentaries I have seen in awhile.", 
        post_rightvotes: 0,
        post_leftvotes:0,
        posts_numberOfComments:0 ,
        author_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date() 

      } 
    
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
  
  }
};
